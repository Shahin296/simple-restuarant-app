import React from 'react';
import FoodComponent from '../FoodComponent/FoodComponent';
import { fakeData } from '../../fake-data/fake-data';
import Header from '../Header/Header';
import FoodHeader from '../FoodHeader/FoodHeader';

const Lunch = () => {

const lunchItems = fakeData.filter(item => item.category === "lunch");
 
    return (
        <div>
            <Header/>
            <FoodHeader/>
            <FoodComponent item={lunchItems}/>
        </div>
    );
};

export default Lunch;