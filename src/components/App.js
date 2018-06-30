import React from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

import Hiro from './hiro/Hiro';
// import Earth from './earth/Earth';
// import TrainTicket from './trainTicket/TrainTicket';

class App extends Component {
  render() {
    return (
      <Hiro />
      // <Earth />
      // <TrainTicket />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
