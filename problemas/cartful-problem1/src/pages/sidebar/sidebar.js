import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './sidebar.scss';

function Sidebar() {
  return (
    <Navbar bg="dark" variant="dark" expand="false" className='sidebarContent'>
      <Container>
        <Navbar.Brand className='mainText'>The Coffe Shop</Navbar.Brand>
        <Navbar.Toggle id="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Barista</Nav.Link>
            <Nav.Link href="/q2">Q2</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Sidebar