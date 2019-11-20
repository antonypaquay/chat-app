import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";
import Connexion from "./components/Connexion";
import NotFound from "./components/NotFound";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Connexion}/>
        <Route path="/pseudo/:pseudo" component={App}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();