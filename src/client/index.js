// Startup point for client side application
import React from "react";
import ReactDOM from 'react-dom';
import Home from "./components/Home";

// document.querySelector('#root') means run home component inside already render <div id="roow"></div>
ReactDOM.hydrate( <Home />, document.querySelector('#root') );


