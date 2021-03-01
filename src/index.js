import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Connexion from "./components/Connexion/Connexion";
import NotFound from "./components/NotFound";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Connexion}/>
        <Route path="/user/:user" component={App}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

