import React from 'react'
import Authentication from '../../util/Authentication/Authentication'

import './Config.css';

export default class ConfigPage extends React.Component<{}, {
  finishedLoading: boolean,
  theme: string
}> {
  Authentication: Authentication;

  constructor(props: {}) {
    super(props);
    this.Authentication = new Authentication()

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
    // do config page setup as needed here
    if (Twitch) {
      Twitch.ext.onAuthorized((auth: any) => {
        this.Authentication.setToken(auth.token, auth.userId);

        if (!this.state.finishedLoading) {
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

          // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
          this.setState({
            finishedLoading: !this.state.finishedLoading,
            theme: this.state.theme
          });
        }
      })

      Twitch.ext.onContext((context: any, delta: any) => {
        this.contextUpdate(context, delta)
      })
    }
  }

  render() {
    return (
      <div className="Config">
        <div className={this.state.theme === 'light' ? 'Config-light' : 'Config-dark'}>
          {this.state.finishedLoading && this.Authentication.isModerator() ? 'There is no configuration needed for this extension!' : 'Carregando...'}
        </div>
      </div>
    )
  }
}