// import React from 'react';
// import Carousel from './components/Carousel/Carousel.js';
// import CardComponent from './components/Cards/Cards.js';
// import Div from './components/Div/Div.js';
// import FormComponent from './components/Action/Action.js'
import React from 'react';
import App from './App.js';
import Carousel from './components/pages/Carousel.js';
import CardComponent from './components/pages/Cards.js';
import Div from './components/pages/Div.js';
import FormComponent from '../../components/pages/Action.js'



const HomeComponent = () => {
    return (
        <div>
            <Carousel />

            <CardComponent />
            <Div />
            <br>
            </br>
            <FormComponent />
        </div>

    )
}

export default HomeComponent;