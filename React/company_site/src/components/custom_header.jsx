import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        return (
            <div>

            <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav.Item>
            </Nav>

            </div>
        )
    }
}

export default Header;