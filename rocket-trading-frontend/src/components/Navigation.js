import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import * as Scroll from 'react-scroll';
import {Link, scrollSpy, scroller} from 'react-scroll';


export default function Navigation() {
    return (
        <Container className="navi">
    <Navbar style={{backgroundColor:'#699aa4', padding:'0 18rem 0 18rem'}} fixed='top' variant="dark">
    <li className="logo-words" href="#home"><img style={{width:'75px', height:'100px', marginRight:'1.5rem'}} src="/assets/favicon.png"/>Rocket Trading</li>
    <Nav className="ml-auto">
      <li className="nav-item" href="#home"><Link to="home" spy={true} activeClass="navi-link" smooth={true}>Home</Link></li>
      <li className="nav-item" href="#pricing"><Link to="services" spy={true} activeClass="navi-link" smooth={true}>Services</Link></li>
      <li className="nav-item" href="#features">About</li>
      <li className="nav-item" href="#pricing">FAQ</li>
      <li className="nav-item" href="#pricing">Contact</li>
      <li className="nav-item" href="#pricing">Our Team</li>
    </Nav>
  </Navbar>
        </Container>
    )
}
