import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Navigation() {
    return (
        <Container className="navi">
    <Navbar style={{backgroundColor:'#699aa4', padding:'0 18rem 0 18rem'}} fixed='top' variant="dark">
    <li className="logo-words" href="#home"><img style={{width:'75px', height:'100px', marginRight:'1.5rem'}} src="/assets/favicon.png"/>Rocket Trading</li>
    <Nav className="ml-auto">
      <li className="nav-item" href="#home">Home</li>
      <li className="nav-item" href="#pricing">Services</li>
      <li className="nav-item" href="#features">About</li>
      <li className="nav-item" href="#pricing">FAQ</li>
      <li className="nav-item" href="#pricing">Contact</li>
      <li className="nav-item" href="#pricing">Our Team</li>
    </Nav>
  </Navbar>
        </Container>
    )
}
