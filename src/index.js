import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import App from "./App";
import Home from "./home";
import Contact from "./contact";
import Edit from "./edit";
import Notfound from "./notfound";


ReactDOM.render(<Home />, document.getElementById("main"));