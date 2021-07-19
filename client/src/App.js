import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Video from "./Video";
import Chat from "./Chat";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/video" component={Video}></Route>
        <Route exact path="/chat" component={Chat}></Route>
      </Switch>
    </Router>
  );
}
