import React from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

import TrainTicket from './trainTicket/TrainTicket';

class App extends Component {
  render() {
    return (
      <TrainTicket />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
