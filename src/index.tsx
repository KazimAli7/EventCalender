/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved

import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Routes/Main';

ReactDOM.render(
  <React.StrictMode>
    {' '}
    <Main />
    {' '}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
