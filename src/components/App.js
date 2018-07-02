import React from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

import Railcard from './railcard/Railcard';

class App extends Component {
  render() {
    return (
      <Railcard />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
