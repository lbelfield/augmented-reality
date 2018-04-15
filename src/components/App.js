import React from 'react';
// import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// import Hiro from './hiro/Hiro';
// import Earth from './earth/Earth';
import Nandos from './nandos/Nandos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/hiro" component={Hiro} /> */}
          {/* <Route path="/earth" component={Earth} /> */}
          <Route path="/earth" component={Nandos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;
