import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel.js';

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
      <Cards/>
      <Div/>

    </div>
  );
}

export default App;
