import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class HuntNavbar extends Component {
    render() {
        return (
            <div className='navbar-dark bg-dark mb-5'>
                <Navbar expand="lg" className="navbar navbar-expand-md navbar-custom navbar-dark bg-dark">
                    <Container>
                        <Navbar.Brand href="/">Hunt: Showdown - Gunshot Noise Quiz</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                {/* <Link href="/about">About</Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default HuntNavbar;
