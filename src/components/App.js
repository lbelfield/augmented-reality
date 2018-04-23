import React from 'react';
// import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// import Hiro from './hiro/Hiro';
import Torus from './torus/Torus';
// import Earth from './earth/Earth';
// import Nandos from './nandos/Nandos';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/hiro" component={Hiro} /> */}
          <Route path="/earth" component={Torus} />
          {/* <Route path="/earth" component={Earth} /> */}
          {/* <Route path="/earth" component={Nandos} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));

export default App;



// import React from 'react';
// // import React, {Component} from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';

// import Hiro from './hiro/Hiro';
// // import HiroNew from './hiroNew/HiroNew';
// // <Route path="/hiro-new" component={HiroNew} />
// import HomePage from './homePage/HomePage';
// import Header from './common/Header';

// const App = (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/hiro" component={Hiro} />
//         </Switch>
//       </BrowserRouter>
//     );

// ReactDOM.render(App, document.getElementById('root'));

// export default App;

