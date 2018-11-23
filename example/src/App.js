import React, { Component } from 'react';

import Embed from 'runkit-embed-react';

export default class App extends Component {
  run = () => {
    this.embed.evaluate();
  };
  render() {
    return (
      <div>
        <Embed ref={instance => (this.embed = instance)} />
        <button onClick={this.run}>Run</button>
      </div>
    );
  }
}
