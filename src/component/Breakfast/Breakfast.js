import React from 'react';
import FoodComponent from '../FoodComponent/FoodComponent';
import { fakeData } from '../../fake-data/fake-data';
import Header from '../Header/Header';
import FoodHeader from '../FoodHeader/FoodHeader';


const Breakfast = () => {

const breakFastItems = fakeData.filter(item => item.category === "breakfast")

    return (
        <div>
              <Header/>
              <FoodHeader/>
            <FoodComponent item={breakFastItems} />
        </div>
    );
};

export default Breakfast;