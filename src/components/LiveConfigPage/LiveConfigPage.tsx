import React from 'react'
import Authentication from '../../util/Authentication/Authentication'

import './LiveConfigPage.css'

export default class LiveConfigPage extends React.Component<{}, {
    finishedLoading: boolean,
    theme: string
}> {
    Authentication: Authentication;

    constructor(props: {}) {
        super(props)
        this.Authentication = new Authentication()

        //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null. 
        window.Twitch = window.Twitch ? window.Twitch.ext : null
        this.state = {
            finishedLoading: false,
            theme: 'light'
        }
    }

    contextUpdate(context: any, delta: any) {
        if (delta.includes('theme')) {
            this.setState(() => {
                return { theme: context.theme }
            })
        }
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

            window.Twitch.onContext((context: any, delta: any) => {
                this.contextUpdate(context, delta)
            })
        }
    }

    componentWillUnmount() {
        if (window.Twitch) {
            window.Twitch.unlisten('broadcast', () => console.log('successfully unlistened'))
        }
    }

    render() {
        if (this.state.finishedLoading) {
            return (
                <div className="LiveConfigPage">
                    <div className={this.state.theme === 'light' ? 'LiveConfigPage-light' : 'LiveConfigPage-dark'} >
                        <p>Hello world!</p>
                        <p>This is the live config page! </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="LiveConfigPage">
                </div>
            )
        }

    }
}