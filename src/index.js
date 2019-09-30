var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));
server.listen(PORT, function() {
    console.log("clicky server running");
});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(<App />, document.getElementById('main'));



serviceWorker.unregister();