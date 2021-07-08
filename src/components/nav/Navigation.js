import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../nav/Navigation.css'
const Navigation = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="md" variant="dark" className="nav-theme" >
            <a class="navbar-brand brand" href="#home">Aditi Prachi</a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto link">
                    <Nav.Link href="#home" >Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#exp">Experience</Nav.Link>
                    <Nav.Link href="#footer">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> 
        </div>
    )
}

export default Navigation
