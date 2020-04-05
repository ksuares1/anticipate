import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import AboutComponent from './pages/About.js';

  export default () => (
      <div>
          <Router>
          <Switch>
              <Route exact path="/about" component={AboutComponent} />
          </Switch>
          </Router>
      </div>
  )