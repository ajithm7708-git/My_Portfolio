import React from 'react';
import { Navbar, Nav,Image } from 'react-bootstrap';

const Header = ({ scrollToSection }) => {
  return (
    <Navbar  variant="dark" expand="lg" fixed="top" style={{backgroundColor:"rgb(7 151 152)"}}>
      <Navbar.Brand href="#">&nbsp;&nbsp;<Image src="my-logo.png" className='rounded-circle logoimg' alt="My Photo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => scrollToSection('about')} className='text-white'>&nbsp;&nbsp; About Me</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('education')}className='text-white'>&nbsp;&nbsp; Education</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('skills')}className='text-white'>&nbsp;&nbsp; Technical Skills</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('internship')}className='text-white'>&nbsp;&nbsp; Internship</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('projects')}className='text-white'>&nbsp;&nbsp; Projects</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('cv')}className='text-white'>&nbsp;&nbsp; Download CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
