import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card>
                            <Card.Img 
                                variant="top"
                                src="https://images.fineartamerica.com/images-medium-large-5/success-puzzle-agedpixel.jpg"
                                alt="img_1"
                            />
                            <Card.Body>
                                <Card.Title>Puzzle</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Connected</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img 
                                variant="bottom"
                                src="https://images.fineartamerica.com/images-medium-large-5/abstract-artwork-with-connected-spheres-pasieka.jpg"
                                alt="img_2"
                            />
                        </Card>
                        <Card>
                            <Card.Img 
                                variant="top"
                                src="https://images.fineartamerica.com/images-medium-large-5/human-networking-across-the-globe-fanatic-studio--science-photo-library.jpg"
                                alt="img_3"
                            />
                            <Card.Body>
                                <Card.Title>Networking</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>

        )
    }
}