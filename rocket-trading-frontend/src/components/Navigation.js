import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import * as Scroll from 'react-scroll';
import {Link, scrollSpy, scroller} from 'react-scroll';


export default function Navigation() {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY === 0){
        setScroll(false);
      }
      else{setScroll(true)};

    })
    return () => {
      
    }
  }, [])
    return (
      <Container >
<Navbar className={`nav-style ${scroll ? 'scroll': null}`}fixed="top" expand="lg">
  <Navbar.Brand style={{color:'white', fontSize:'2.3rem'}} className="logo-words" href="#home"><img className="logo-image" src="/assets/rocket-watermark.png"/>Rocket Trading</Navbar.Brand>
  <br/>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="flex-row" id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="home" offset={-110} hashSpy={true} spy={true} activeClass="navi-link" smooth={true}>Home</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="features" offset={-110} hashSpy={true} spy={true} activeClass="navi-link" smooth={true}>Features</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="ourteam" offset={-110} hashSpy={true} spy={true} activeClass="navi-link" smooth={true}>Team</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="services" offset={-110} hashSpy={true} spy={true}  activeClass="navi-link" smooth={true}>Services</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="faq" offset={-110} hashSpy={true} spy={true} activeClass="navi-link" smooth={true}>FAQ</Link></Nav.Link>
      <Nav.Link style={{color:'white'}} className="nav-item"><Link to="contact" offset={-110} hashSpy={true} spy={true} activeClass="navi-link" smooth={true}>Contact</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Container>
    )
}
