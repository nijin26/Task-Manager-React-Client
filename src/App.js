import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import Nav from "./components/Nav/Nav";

import Account from "./components/Account/Account";
import * as actions from "./store/actions/index";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(actions.authCheckState()), []);

  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/acc" component={Account} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
