import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <Container fluid className="footer py-3 text-center bg-dark text-light">
                <br />
                <p>Infused with Caffeine, Snacks, and Nerdy Zeal - Created by Dylan Wallach</p>
                <br />
                <p>Heavily Inspired by <a href='https://twitter.com/Kamille_92'>Kamille's</a> <a href='https://hunt.kamille.ovh/'>Weapon Sound Leaner</a> from the <a href='https://reddit.com/r/huntshowdown'>Hunt: Showdown Subreddit</a></p>
                <p>
                    The sounds used on this site are not claimed as my own; any copyrights and/or trademarks associated with these sounds belong to <a href='https://www.crytek.com/'>Crytek GmbH</a>.</p>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <a href="https://github.com/FireWallach" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} />
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://www.instagram.com/columnenjoyer" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={20} />
                        </a>
                    </Col>
                    <Col xs="auto">
                        <a href="https://www.linkedin.com/in/dylan-wallach-085973108" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
