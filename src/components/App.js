import React, {Component} from 'react';
// import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

// import Hiro from './hiro/Hiro';
// import Torus from './torus/Torus';
// import RollingScopes from './rollingScopes/RollingScopes';
// import Earth from './earth/Earth';
// import TrainTicket from './trainTicket/TrainTicket';
// import Railcard from './railcard/Railcard';
// import TrainTracker from './trainTracker/TrainTracker';k
import MultiMarker from './ArTest';

class App extends Component {
  render() {
    return (
      // <Hiro />
      // <Torus />
      // <Earth />
      // <RollingScopes />
      // <TrainTicket />
      // <Railcard />
      <MultiMarker />
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
