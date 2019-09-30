import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();


app.listen(PORT, function(){
    console.log("clicky server running")
});


ReactDOM.render(<App />, document.getElementById('main'));



serviceWorker.unregister();
