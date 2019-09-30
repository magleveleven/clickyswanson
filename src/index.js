import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';



ReactDOM.render(<App />, document.getElementById('main'));



serviceWorker.unregister();
