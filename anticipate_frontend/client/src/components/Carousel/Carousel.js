import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import image from '../../assets/img/national-cancer-institute-701-FJcjLAQ-unsplash.jpg'
import Button from 'react-bootstrap/Button';

const CarouselComponent = () => {
    return (
        <Carousel className="carousel-size">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../assets/img/doctor-visit.jpg")}
                    alt="Doctor patient visit"
                />
                <Carousel.Caption className="carousel-bg">
                    <div>
                    <h3 className="first-car">Anticipate</h3>
                    <p class="first-car">Meet the app that's changing the way the medical community interacts with patients</p>
                     <>
                    <Button href="/about" variant="outline-dark">Find Out More</Button>{' '}
                    </> 
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-flex w-100"
                    src= {require("../../assets/img/patient-doctor.jpg")}
                    alt="Doctor speaking with patient"
                />

                <Carousel.Caption className="carousel-bg">
                    <h3 className="first-car">What's the last conversation that you had with your nurse or doctor?</h3>
                    <p className="first-car">Help us continue to develop more features to create connectivity with patients</p>
                     <>
                    <Button href="/readygo" variant="outline-dark">Learn More</Button>
                    </> 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../assets/img/patient.jpg")}
                    alt="Patient alone"
                />

                <Carousel.Caption className="carousel-bg">
                    <h3 className="first-car">Contact Us</h3>
                    <p className="first-car">For additional information about Anticipate, reach out to us.</p>
                    <>
                 <Button href="/readygo" variant="outline-light">Learn More</Button>{' '} 
                    </> 
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;