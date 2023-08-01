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
            clicked: {}
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
        if (gunName === this.state.choices[this.state.answerIndex].name) {
            console.log('Correct')
            this.setState(prevState => ({ correct: prevState.correct + 1, clicked: { ...prevState.clicked, [gunName]: 'success' } }));
        } else {
            console.log('Incorrect')
            this.setState(prevState => ({ incorrect: prevState.incorrect + 1, clicked: { ...prevState.clicked, [gunName]: 'danger' } }));
        }
    }


    generateChoices = (numChoices) => {
        let choices = [];
        while (choices.length < numChoices) {
            let index = this.getRandomInt(0, gunshots.length - 1);
            if (!choices.some(gun => gun.name === gunshots[index].name)) {
                choices.push(gunshots[index]);
            }
        }
        choices = choices.sort((a, b) => {
            if (a.item1 === b.item1) {
                return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
            }
            return 0;
        });
        this.setState({
            choices,
            answerIndex: this.getRandomInt(0, numChoices - 1),
        });
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    renderChoiceButtons() {
        return this.state.choices.map((gun) => {
            const variant = this.state.clicked[gun.name] ? `outline-${this.state.clicked[gun.name]}` : 'outline-light';
            return (<Col>
                <Button
                    key={gun.name}
                    className="m-2 mt-5 choice-button"
                    variant={variant}
                    onClick={() => this.guessGun(gun.name)}
                >
                    <Container>
                        <Row>
                            <Col>
                                <img className="gun-thumbnail" src={gun.image} />
                            </Col>
                        </Row>
                    </Container>
                    {gun.name}
                </Button>
            </Col>)
        });
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
                    <Row className='justify-content-md-center align-items-center'>

                        {this.renderChoiceButtons()}

                    </Row>
                </Container>
            </div>
        );
    }
}

export default BodyCard;
