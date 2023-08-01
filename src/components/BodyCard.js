import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gunshots from '../data/gunshotSounds';
import "./BodyCard.css"

class BodyCard extends Component {
    constructor() {
        super();
        this.state = {
            correct: 0,
            incorrect: 0,
            choices: [],
            answerIndex: null,
        }
    }

    componentDidMount() {
        this.generateChoices(4);
    }

    handleSoundButtonClick = () => {
        const audio = new Audio(this.state.choices[this.state.answerIndex].sound);
        audio.play();
    }

    guessGun = (gunName) => {
        //TODO: Implement Guessing
    }

    generateChoices = (numChoices) => {
        let choices = [];
        while (choices.length < numChoices) {
            let index = this.getRandomInt(0, gunshots.length - 1);
            if (!choices.some(gun => gun.name === gunshots[index].name)) {
                choices.push(gunshots[index]);
            }
        }
        this.setState({
            choices,
            answerIndex: this.getRandomInt(0, numChoices - 1),
        });
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    renderChoiceButtons() {
        return this.state.choices.map((gun) => (
            <Button
                key={gun.name}
                className="m-2 mt-5"
                variant='info'
                onClick={() => this.guessGun(gun.name)}
            >
                {gun.name}
            </Button>
        ));
    }

    render() {
        const { correct, incorrect } = this.state;
        return (
            <div className='text-light p-4 mb-4 rounded bg-secondary'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={5}>
                            <h1>
                                20m - <span className='correct'>{correct}</span> / <span className='incorrect'>{incorrect}</span>
                            </h1>
                        </Col>
                        <Col>
                            <Button onClick={this.handleSoundButtonClick} variant='success'>Play Sound</Button>
                        </Col>
                        <Col>
                            <img src={"/images/mystery.png"} className='img-fluid gun-image' alt="Mystery Gun" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {this.renderChoiceButtons()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BodyCard;
