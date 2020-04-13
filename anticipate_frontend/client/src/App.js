import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Nav/index.js';
import AboutComponent from './pages/About.js';
import showVitals from "./pages/Vitals.js";
import HomeComponent from "./pages/Home.js";
import showFamily from "./pages/Family.js";
import Patients from "./pages/Patients.js";

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <div>
            <Route exact path="/" component={HomeComponent} /> 
            <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/vitals" component={showVitals} />
            <Route exact path="/family" component={showFamily} />
            <Route exact path="/patients" component={Patients} />
          </div>
        </div>
      </Router>

      <div>
        <br>
        </br>
        <footer>
          <p> Anticipate &copy; Copyright 2020</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
