import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import Scoring from './components/Scoring';

import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(<Header />, document.getElementById('head'));
ReactDOM.render(<Scoring />, document.getElementById('score'));
ReactDOM.render(<App />, document.getElementById('instruction'));



serviceWorker.unregister();
