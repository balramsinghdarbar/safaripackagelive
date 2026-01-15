import React, { useState, useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import safariLogoImg from '../../assets/images/safari-logo.png';

import { Container } from 'react-bootstrap';
import userImg from '../../assets/images/user.png'
import '../../css/style.css';
import '../../css/common.css';
import '../../css/responsive.css';


const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#f27a3b' : ' #1D4358',
});


export default function Header() {
    return (
        //  Header
        <div>
            <header>
                <Navbar expand="lg" className="bg-white py-2">
                    <Container fluid className="container-padding">
                        <Navbar.Brand as={NavLink} to="/">
                            <img src={safariLogoImg} alt="SafariMeet Logo" />
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="safariNavbar" data-bs-target="#safariNavbar" aria-expanded="false" >
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>

                        <Navbar.Collapse id="safariNavbar">
                            <Nav className="ms-auto mb-2 mb-lg-0 align-items-center gap-2">
                                <NavLink to="/join-shared-safari"className= "nav-link" style={navLinkStyles}>Shared Safari</NavLink>
                                <NavLink to="/safari-packages" className= "nav-link" style={navLinkStyles}>Safari Packages</NavLink>
                                <NavLink to="/park-guides" className='nav-link' style={navLinkStyles}>Park Guides</NavLink>
                                <NavLink to="/species" className='nav-link' style={navLinkStyles}>Species</NavLink>
                                <NavLink to="/contact" className='nav-link' style={navLinkStyles}>Contact</NavLink>
                                <NavLink to="/create-shared-tour" className='nav-link create-tour' style={navLinkStyles}>Create Shared Tour</NavLink>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" role="button" aria-expanded="false" style={{ borderRadius: "50%" }} className="nav-link profile-icon">
                                        <img src={userImg} alt="User" style={{ width: "30px", height: "30px" }} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item as={NavLink} to="/login" >Login</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/registration">sign up</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/profile">My Profile</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );

}