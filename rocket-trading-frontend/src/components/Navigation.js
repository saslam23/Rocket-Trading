import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
    return (
        <div className="navi">
    <Navbar bg="#699aa4" variant="dark">
    <li className="logo" href="#home">Rocket Trading</li>
    <Nav className="ml-auto">
      <li className="nav-item" href="#home">Home</li>
      <li className="nav-item" href="#features">About</li>
      <li className="nav-item" href="#pricing">FAQ</li>
      <li className="nav-item" href="#pricing">Contact</li>
      <li className="nav-item" href="#pricing">Team</li>
    </Nav>
  </Navbar>
        </div>
    )
}
