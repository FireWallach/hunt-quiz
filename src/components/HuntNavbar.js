import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

class HuntNavbar extends Component {
    render() {
        return (
            <div className='navbar-dark bg-dark mb-5'>
                <Navbar expand="lg" className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <Container>
                        <Navbar.Brand href="#home">Hunt: Showdown - Gunshot Noise Quiz</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default HuntNavbar;