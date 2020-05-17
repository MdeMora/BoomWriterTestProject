import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'

/* ---- styles ---- */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


const Header = () => {
    return(
        <Navbar bg="white" expand="md" className='sticky-top'>
            <Navbar.Brand href="/"><img src='./../../../logo.png' height='30' alt='BoomWriterLogo'></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className='navBtn' to="/tools">Tools</Link>
                <Link className='navBtn' to="#link">Parents</Link>
                <Link className='navBtn' to="/Pricing-plus">Pricing</Link>
                <Link className='navBtn' to="#link">Bookstore</Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Tutorials</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">WritingBee</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Case Studies</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <div className='d-flex'>
                <Link to='#link' className='navBtn'>Login</Link>
                <Link to='#link' className='navBtn join'>Join</Link>
            </div>
        </Navbar>
    )
}

export default Header