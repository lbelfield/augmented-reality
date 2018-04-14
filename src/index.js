import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './styles/styles.css'; // Webpack can import CSS files too!
import App from './components/App';

const history = createHistory();

const app = (
  <App history={history}/>
);

ReactDOM.render(app, document.getElementById('root'));
