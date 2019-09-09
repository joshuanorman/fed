import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LangContext } from '../LangContext';

function Header() {
    const [lang, setLang] = useContext(LangContext);
    return (
        <>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">{ lang.heading }</Navbar.Brand>
        
        <Nav className="mr-auto justify-content-center">
            <Nav.Item>
                <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Episodes</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>
        </>
        );
}

export default Header;