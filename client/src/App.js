import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Join } from "./components/join/Join";
import { Chat } from "./components/chat/Chat";

import "./App.css";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Join}></Route>
      <Route path="/chat" component={Chat}></Route>
    </Switch>
  </Router>
);

export default App;
