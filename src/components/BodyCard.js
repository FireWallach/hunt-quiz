import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import gunshots from '../data/gunshotSounds';
import "./BodyCard.css"

class BodyCard extends Component {
    static guns;

    constructor() {
        super();
        this.state = {
            correct: 0,
            incorrect: 0
        }
        this.guns = gunshots.map((gun) => (
            <Button className="m-2" 
            variant='info'
            onClick={this.guessGun}>{gun.name}</Button>
        ))
    }

    guessGun(){
        //TODO: Implement Guessing
    }

    render() {
        return (
            <div className='text-light p-4 mb-4 rounded bg-secondary'>
                <Container>
                    <Row>
                        <Col xs={5}>
                            <h1>
                                20m - <span className='correct'>{this.state.correct}</span> / <span className='incorrect'>{this.state.incorrect}</span>
                            </h1>
                        </Col>
                        <Col>
                            <Button variant='success'>Play Sound</Button>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <ButtonGroup>
                            <Button variant='danger'>Reset</Button>
                            <Button>Compact</Button>
                            <Button>Medium</Button>
                            <Button>Long</Button>
                            <Button>Shotgun</Button>
                            <Button>Special</Button>
                        </ButtonGroup>
                    </Row>
                    <Row>
                        <Col>
                            {this.guns}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BodyCard;