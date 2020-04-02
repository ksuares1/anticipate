import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import image from '../../assets/img/national-cancer-institute-701-FJcjLAQ-unsplash.jpg'
import Button from 'react-bootstrap/Button';
const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../assets/img/doctor-visit.jpg")}
                    alt="Doctor patient visit"
                />
                <Carousel.Caption>
                    <h3>Anticipate</h3>
                    <p>Meet the app that's changing the way the medical community interacts with patients</p>
                     <>
                    <Button variant="outline-dark">Find Out More</Button>{' '}
                    </> 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {require("../../assets/img/patient-doctor.jpg")}
                    alt="Doctor speaking with patient"
                />

                <Carousel.Caption>
                    <h3>What's the last conversation that you had with your nurse or doctor?</h3>
                    <p>Help us continue to develop more features to create connectivity with patients</p>
                     <>
                    <Button variant="outline-dark">Learn More</Button>{' '}
                    </> 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../../assets/img/patient.jpg")}
                    alt="Patient alone"
                />

                <Carousel.Caption>
                    <h3>Contact Us</h3>
                    <p>For additional information about Anticipate, reach out to us.</p>
                    <>
                 <Button variant="outline-light">Learn More</Button>{' '} 
                    </> 
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
}

export default CarouselComponent;