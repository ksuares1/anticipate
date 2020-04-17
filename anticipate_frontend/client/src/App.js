import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Nav';
// import Vitals from './components/Vitals/Vitals.js';
// import Family from './components/Family/Family.js';
import AboutComponent from './pages/About.js';
import showVitals from "./pages/Vitals.js";
import HomeComponent from "./pages/Home.js";
import showMic from './components/Nurse/Readygo';
import SignComponent from './pages/Signup.js';
import LoginPage from './pages/Login.js';


function App() {
  return (
    <div>

      <Router>
        <div>
          <NavBar />
          <br>
          </br>
          <div>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route exact path="/vitals" component={showVitals} />
            <Route exact path="/nurse" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignComponent} />
            <Route exact path="/readygo" component={showMic} />

          </div>
        </div>
      </Router>
    

      <br>
      </br>

      <footer className="footer">
        <p> Anticipate &copy; Copyright 2020</p>
      </footer>
      {/* {location.pathname !== "/about” && <Footer/>} */}
    </div>
  );
}

export default App;
