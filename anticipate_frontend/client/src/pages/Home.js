import React from 'react';
import Carousel from '../components/Carousel/Carousel.js';
import CardComponent from '../components/Cards/Cards.js';
// import Button from 'react-bootstrap/Button';



const HomeComponent = () => {
    return (
        <main>
            <Carousel />
            <br>
            </br>
            <CardComponent />
            <br>
            </br>
            {/* <div>
                <h1 className="message">Anticipate assists nurses and medical professionals with their interactions with patients.</h1>
                <Button variant="outline-dark">Find Out More</Button>{' '}

            </div> */}
        </main>
    )
}

export default HomeComponent;