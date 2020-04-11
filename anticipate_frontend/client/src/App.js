import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from 'react-bootstrap/Navbar';
// import Vitals from './components/Vitals/Vitals.js';
// import Family from './components/Family/Family.js';
import AboutComponent from './pages/About.js';
import showVitals from "./pages/Vitals.js";
import HomeComponent from "./pages/Home.js";
import showMic from './components/Nurse/Readygo';
import SignupComponent from './components/Nurse/Signup';
import showNurse from './pages/Nurse';

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
            <Route exact path="/nurse" component={showNurse} />
            <Route exact path="/signup" component={SignupComponent} />
            <Route exact path="/readygo" component={showMic} />

          </div>
        </div>
      </Router>

      <div>
        <br>
        </br>
        <footer>
          <p className="text-center"> Anticipate &copy; Copyright 2020</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
