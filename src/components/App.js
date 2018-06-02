import React from 'react';
// import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM, { render } from 'react-dom';

// import Hiro from './hiro/Hiro';
// import Torus from './torus/Torus';
import RollingScopes from './rollingScopes/RollingScopes';
// import BespokeMarker from './bespokeMarker/BespokeMarker';
// import Earth from './earth/Earth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/hiro" component={Hiro} /> */}
          {/* <Route path="/torus" component={Torus} /> */}
          {/* <Route path="/earth" component={Earth} /> */}
          <Route path="/rollingScopes" component={RollingScopes} />
          {/* <Route path="/bespokeMarker" component={BespokeMarker} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
