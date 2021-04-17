import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import * as Scroll from 'react-scroll';
import {Link, scrollSpy, scroller} from 'react-scroll';


export default function Navigation() {
    return (
      <Container >
<Navbar className="nav-style" fixed="top" expand="lg">
  <Navbar.Brand style={{color:'white'}} className="logo-words" href="#home"><img style={{width:'55px', height:'75px', marginRight:'1.5rem'}} src="/assets/favicon.png"/>Rocket Trading</Navbar.Brand>
  <br/>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="flex-row" id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="home" spy={true}  activeClass="navi-link" smooth={true}>Home</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="services" spy={true} offset={-70} activeClass="navi-link" smooth={true}>Services</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="our-team" spy={true} offset={5} activeClass="navi-link" smooth={true}>Team</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="faq" spy={true} offset={5} activeClass="navi-link" smooth={true}>FAQ</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Container>
    )
}
