import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../pages/home"
import NotFound from "../pages/NotFound"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
