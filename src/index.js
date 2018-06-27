import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = (
  <App />
);

ReactDOM.render(app, document.getElementById('root'));
