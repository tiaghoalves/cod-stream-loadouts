import React from 'react';
import Authentication from '../../util/Authentication/Authentication';

import './App.css'

export default class App extends React.Component<{}, {
    finishedLoading: boolean,
    theme: string,
    isVisible: boolean
}> {
    Authentication: Authentication;
    state: {
        finishedLoading: boolean,
        theme: string,
        isVisible: boolean
    }

    constructor(props: {}) {
        super(props);
        this.Authentication = new Authentication();

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null. 
        window.Twitch = window.Twitch ? window.Twitch.ext : null
        this.state = {
            finishedLoading: false,
            theme: 'light',
            isVisible: true
        }
    }

    contextUpdate(context: any, delta: any) {
        if (delta.includes('theme')) {
            this.setState(() => {
                return { theme: context.theme }
            })
        }
    }

    visibilityChanged(isVisible: any) {
        this.setState(() => {
            return {
                isVisible
            }
        })
    }

    componentDidMount() {
        if (window.Twitch) {
            window.Twitch.onAuthorized((auth: any) => {
                this.Authentication.setToken(auth.token, auth.userId)
                if (!this.state.finishedLoading) {
                    // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

                    // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
                    this.setState(() => {
                        return { finishedLoading: true }
                    })
                }
            })

            window.Twitch.listen('broadcast', (target: any, contentType: any, body: any) => {
                window.Twitch.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
                // now that you've got a listener, do something with the result... 

                // do something...

            })

            window.Twitch.onVisibilityChanged((isVisible: any, _c: any) => {
                this.visibilityChanged(isVisible)
            })

            window.Twitch.onContext((context: any, delta: any) => {
                this.contextUpdate(context, delta)
            })
        }
    }

    componentWillUnmount() {
        if (window.Twitch) {
            window.Twitch.unlisten('broadcast', () => { })
        }
    }

    render() {
        if (this.state.finishedLoading && this.state.isVisible) {
            return (
                <div className="App">
                    <div className={this.state.theme === 'light' ? 'App-light' : 'App-dark'} >
                        <p>Hello world!</p>
                        <p>My token is: {this.Authentication.state.token}</p>
                        <p>My opaque ID is {this.Authentication.getOpaqueId()}.</p>
                        <div>{this.Authentication.isModerator() ? <p>I am currently a mod, and here's a special mod button <input value='mod button' type='button' /></p> : 'I am currently not a mod.'}</div>
                        <p>I have {this.Authentication.hasSharedId() ? `shared my ID, and my user_id is ${this.Authentication.getUserId()}` : 'not shared my ID'}.</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="App">
                </div>
            )
        }

    }
}