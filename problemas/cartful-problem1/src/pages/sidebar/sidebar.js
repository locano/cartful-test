import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './sidebar.scss';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='sidebarContent'>
      <Container>
        <Navbar.Brand className='mainText'>The Coffe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Barista</Nav.Link>
            <Nav.Link href="#link">Q2</Nav.Link>
            <Nav.Link href="#link">Results</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Sidebar