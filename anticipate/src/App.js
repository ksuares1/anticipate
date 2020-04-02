import React from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// import Cards from './components/Cards/Cards.js';
// import Div from './components/Div/Div.js';
// import Action from './components/Action/Action.js;


function App() {
  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Anticipate</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#link">Family</Nav.Link>
      <NavDropdown title="Nurse" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Patient</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Temperature</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Vitals</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Call Patient</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      {/* <nav>
        <p>Logo</p>
        <p>About</p>
        <p>Contact</p>
        <p>Login</p>
      </nav> */}
       <Carousel/> 
      {/* <Cards/> */}
      {/* <Div/> */}
      {/* <Action/> */}

    </div>
  );
}

export default App;
