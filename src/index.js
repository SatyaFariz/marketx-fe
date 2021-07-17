import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createRelay from './Mobile/createRelay';
import { createBrowserHistory as createHistory } from 'history';
import {
  isMobile
} from "react-device-detect"

ReactDOM.render(
  <React.StrictMode>
    {true ?
    <App history={createHistory()} createRelay={createRelay}/>
    :
    <div></div>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
