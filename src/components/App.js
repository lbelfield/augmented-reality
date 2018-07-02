import React from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

import Earth from './earth/Earth';

class App extends Component {
  render() {
    return (
      <Earth />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
