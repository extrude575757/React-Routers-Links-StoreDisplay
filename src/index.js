import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");

// <Router> must wrap our entire component for routing to be purely managed
// by react router / client-side routing. Keeps browser URL in sync with App

// Router is an alias for BrowserRouter : https://reacttraining.com/react-router/web/api/BrowserRouter
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
