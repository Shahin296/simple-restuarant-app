import React from 'react';
import { fakeData } from '../../fake-data/fake-data';
import FoodComponent from '../FoodComponent/FoodComponent';
import FoodHeader from '../FoodHeader/FoodHeader';
import Header from '../Header/Header';

const Dinner = () => {

    const dinnerItems = fakeData.filter(item => item.category === "dinner")

    return (
        <div>
           <Header/>
          <FoodHeader/>
          <FoodComponent item={dinnerItems}/>
        </div>
    );
};

export default Dinner;