import React, {Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
              <h1>About</h1>
              <p>This application uses React, Redux, React Routrer and a variety of other helpful libraries</p>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'))
