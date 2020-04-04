import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import Vitals from './components/Vitals/Vitals.js';
// import Family from './components/Family/Family.js';
import CardComponent from './components/Cards/Cards.js';
import Div from './components/Div/Div.js';
import FormComponent from './components/Action/Action.js';



function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Anticipate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#link">Family</Nav.Link>
            <NavDropdown title="Nurse" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign-up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Patient</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">ReadyGo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <br>
      </br>
      <Carousel />
      <br>
      </br>
      <CardComponent />
      <Div />
      <br>
      </br>
      <FormComponent /> */}
  

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
