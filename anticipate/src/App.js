import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel.js';
// import Cards from './components/Cards/Cards.js';
// import Div from './components/Div/Div.js';
// import Action from './components/Action/Action.js;


function App() {
  return (
    <div className="App">
      <nav>
        <p>Logo</p>
        <p>About</p>
        <p>Contact</p>
        <p>Login</p>
      </nav>
       <Carousel/> 
      {/* <Cards/> */}
      {/* <Div/> */}
      {/* <Action/> */}

    </div>
  );
}

export default App;
