import React from 'react';
import Carousel from '../components/Carousel/Carousel.js';
import CardComponent from '../components/Cards/Cards.js';
import Div from '../components/Div/Div.js';
import FormComponent from '../components/Action/Action.js'

const HomeComponent= () => {
    return (
        <div>
        <Carousel />
        <br>
        </br>
        <CardComponent />
        <Div />
        <br>
        </br>
         <FormComponent /> 
         </div>
    )
}

export default HomeComponent;