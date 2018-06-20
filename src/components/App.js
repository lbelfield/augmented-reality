import React from 'react';
// import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM, { render } from 'react-dom';

// ifconfig -> en0 -> inet -> https/x:3000

// import Hiro from './hiro/Hiro';
// import Torus from './torus/Torus';
// import RollingScopes from './rollingScopes/RollingScopes';
// import BespokeMarker from './bespokeMarker/BespokeMarker';
// import Earth from './earth/Earth';
import TrainTicket from './trainTicket/TrainTicket';
// import LiveTrainTicket from './liveTrainTicket/LiveTrainTicket';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/hiro" component={Hiro} /> */}
          {/* <Route path="/torus" component={Torus} /> */}
          {/* <Route path="/earth" component={Earth} /> */}
          {/* <Route path="/rollingScopes" component={RollingScopes} /> */}
          {/* <Route path="/bespokeMarker" component={BespokeMarker} /> */}
          <Route path="/trainTicket" component={TrainTicket} />
          {/* <Route path="/liveTrainTicket" component={LiveTrainTicket} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
