import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createRelay from './Mobile/createRelay';
import { createBrowserHistory as createHistory } from 'history';
import Test from './Web/Test'
import {
  isMobile
} from "react-device-detect"
import moment from 'moment'
import 'moment/locale/id'  // without this line it didn't work
moment.locale('id')

ReactDOM.render(
  <React.StrictMode>
    {isMobile ?
    <App history={createHistory()} createRelay={createRelay}/>
    :
    <Test/>
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
