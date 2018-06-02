import React from 'react';
// import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM, { render } from 'react-dom';

// import Hiro from './hiro/Hiro';
import Torus from './torus/Torus';
// import Earth from './earth/Earth';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/hiro" component={Hiro} /> */}
          <Route path="/torus" component={Torus} />
          {/* <Route path="/earth" component={Earth} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
