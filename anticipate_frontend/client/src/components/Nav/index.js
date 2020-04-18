import React from 'react';
// import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Anticipate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/family">Family</Nav.Link> */}
            <NavDropdown title="Nurse" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/signup">Sign-up</NavDropdown.Item>
              <NavDropdown.Item href="/patients">Patient</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/readygo">ReadyGo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button> 
          </Form>
        </Navbar.Collapse>
      </Navbar>

    )
}
export default NavBar;