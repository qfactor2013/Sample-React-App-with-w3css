/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App';
// import Head from './component/Head';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
