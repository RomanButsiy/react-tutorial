import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg1 from '../assets/forest1.jpg';
import forestImg2 from '../assets/forest2.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg1}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipiscing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg2}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Other forest image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipiscing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={forestImg1}
                        alt="Forest"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipiscing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}