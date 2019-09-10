import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LangContext } from '../LangContext';
import  Translate from './Translate';


function Header() {
    const [lang, setLang] = useContext(LangContext);
    return (
        <Navbar collapseOnSelect expand="sm" id="header" className="header-spacing" bg="dark" variant="dark" >
            <Navbar.Brand href="#header">{ lang.data.heading }</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto justify-content-center" >
            <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#episodes">Episodes</Nav.Link>
            </Nav.Item>
            <Translate />
            </Nav>
            </Navbar.Collapse>
        </Navbar>
);
}

export default Header;