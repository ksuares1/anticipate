import React from "react";

const Carousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Anticipate</h3>
                    <p>Meet the app that's changing the way the medical community interacts with patients</p>
                    <>
                    <Button variant="outline-secondary">Find Out More</Button>{' '}
                    </>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>What's the last conversation that you had with your nurse or doctor?</h3>
                    <p>Help us continue to develop more features to create connectivity with patients.</p>
                    <>
                    <Button variant="outline-secondary">Learn More</Button>{' '}
                    </>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Contact Us</h3>
                    <p>For additional information about Anticipate, reach out us.</p>
                    <>
                    <Button variant="outline-secondary">Contact</Button>{' '}
                    </>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    )
}

export default Carousel;