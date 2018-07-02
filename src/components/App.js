import React from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

import Hiro from './hiro/Hiro';

class App extends Component {
  render() {
    return (
      <Hiro />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
