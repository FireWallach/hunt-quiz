import React, { Component } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle, FaPlay } from 'react-icons/fa';
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
            clicked: {},
            isGuessed: false,
            thumbnailUrl: '/images/mystery.png',
            timeLeft: 3,
            choiceCount: 4,
            streak: 0
        }
    }

    componentDidMount() {
        this.generateChoices(this.state.choiceCount);
    }

    componentWillUnmount() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }

    handleSoundButtonClick = () => {
        const audio = new Audio(this.state.choices[this.state.answerIndex].sound);
        audio.play();
    }

    guessGun = (gunName) => {
        if (gunName === this.state.choices[this.state.answerIndex].name) {
            this.setState(prevState => ({
                correct: prevState.correct + 1,
                clicked: { ...prevState.clicked, [gunName]: 'success' },
                isGuessed: true,
                thumbnailUrl: prevState.choices[prevState.answerIndex].image,
                streak: prevState.streak + 1
            }));
        } else {
            this.setState(prevState => ({
                incorrect: prevState.incorrect + 1,
                clicked: { ...prevState.clicked, [gunName]: 'danger' },
                isGuessed: true,
                thumbnailUrl: prevState.choices[prevState.answerIndex].image,
                streak: 0
            }));
        }
        this.startCountdown();
    }

    startCountdown = () => {
        // Clear any existing interval
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }

        // Set a new interval to update timeLeft every second
        this.countdownInterval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.timeLeft > 0) {
                    return { timeLeft: prevState.timeLeft - 1 };
                } else {
                    clearInterval(this.countdownInterval);
                    this.countdownInterval = null;
                    return { timeLeft: 0 };
                }
            });
        }, 1000);

        let newChoiceCount = this.state.choiceCount;

        if (this.state.streak > 2 && this.state.choiceCount < gunshots.length) {
            newChoiceCount++;
        } else if (this.state.streak == 0 && this.state.choiceCount > 4) {
            newChoiceCount--;
        }

        this.setState({
            choiceCount: newChoiceCount
        });

        // Set a timeout to reset the question after 5 seconds
        setTimeout(() => {
            this.resetQuestion();
        }, 5000);
    }

    resetQuestion = () => {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }

        this.generateChoices(this.state.choiceCount);
        this.setState({
            isGuessed: false,
            timeLeft: 3,
            clicked: {},
            thumbnailUrl: '/images/mystery.png'
        });
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
            const clicked = this.state.clicked[gun.name];
            let variant, icon;
            if (clicked) {
                variant = clicked;
                icon = clicked === 'success' ? <FaCheckCircle /> : <FaTimesCircle />;
            } else {
                variant = 'outline-light';
                icon = null;
            }
            return (
                <Col>
                    <Button
                        key={gun.name}
                        className="m-2 mt-5 choice-button"
                        variant={variant}
                        onClick={() => this.guessGun(gun.name)}
                        disabled={this.state.isGuessed}
                    >
                        <Container>
                            <Row>
                                <Col>
                                    <img className="gun-thumbnail" src={gun.image} alt='gun thumbnail' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {icon} {gun.name}
                                </Col>
                            </Row>
                        </Container>
                    </Button>
                </Col>
            );
        });
    }






    render() {
        const { correct, incorrect } = this.state;

        // Calculate the total number of guesses
        const total = correct + incorrect;
        // Calculate the percentage of correct and incorrect guesses
        const correctPercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        const incorrectPercentage = total > 0 ? Math.round((incorrect / total) * 100) : 0;

        return (
            <div className='text-light p-4 mb-4 rounded bg-secondary'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={5}>
                            <h1>
                                <span className='correct'>{correct}</span> / <span className='incorrect'>{incorrect}</span> {this.state.isGuessed && <span>-- Next Round in {this.state.timeLeft}s</span>}
                            </h1>
                            <ProgressBar>
                                <ProgressBar variant="success" now={correctPercentage} key={1} label={`${correctPercentage}%`} />
                                <ProgressBar variant="danger" now={incorrectPercentage} key={2} label={`${incorrectPercentage}%`} />
                            </ProgressBar>
                        </Col>
                        <Col>
                            <Button onClick={this.handleSoundButtonClick} variant='success'><FaPlay /> Play Sound</Button>
                        </Col>
                        <Col>
                            <img src={this.state.thumbnailUrl} className='img-fluid mystery-gun' alt="Mystery Gun" />
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
