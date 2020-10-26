import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        console.log(window.location.href)
        return (
            <Nav justify className="justify-content-center" variant="tabs" activeKey={window.location.href}>
            <Nav.Item>
                <Nav.Link eventKey="http://localhost:3000/" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey= "http://localhost:3000/About" href="/About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="http://localhost:3000/Contact" href="/Contact">Contact</Nav.Link>
            </Nav.Item>
            </Nav>
        )
    }
}

export default Header;