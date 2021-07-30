import React from 'react';
import { useHistory, useParams } from 'react-router';
import "./FoodDetail.css";
import { fakeData } from '../../fake-data/fake-data';
import { useState } from 'react';
import { useContext } from 'react';
import { FoodContext } from '../../App';

const FoodDetails = () => {
    const [countItem, setCountItem] = useState(1)
    const {foodId} = useParams();
    const foodItem =  fakeData.find(item => parseInt(item._id) === parseInt(foodId)) 
 
    const handleIncrease = () =>{
        setCountItem(countItem + 1)
    }
   const handleDecreased = () =>{
      if(countItem > 1){
        setCountItem(countItem - 1)
      }
   }

   const [detail, setDetail] = useContext(FoodContext)
   const history = useHistory()
   const addToCart =()=>{
    setDetail({foodItem : foodItem , quantity: countItem})
     history.push("/DeliveryDetails")
   }

   const foodsPrice = parseInt(foodItem.price * countItem)
    return (
        <div className="container foodDetailPage">
           <div className="row">
               <div className="col-md-12 col-lg-6 ">
                 <div className="d-flex flex-column justify-content-center align-items-center">
                  <h2>{foodItem.name}</h2> 
                    <p>{foodItem.finalDescript}</p>
                   <h3>${foodsPrice} <button onClick={handleIncrease} className="changingBtn">+</button><span className="quantity"> {countItem} </span><button
                   onClick={handleDecreased} className="changingBtn">-</button></h3>  
                   <button onClick={addToCart} className="addToCart">Add</button>
                 </div> 
               </div>
               <div className="col-md-12 col-lg-6 ">
                 <div className = "d-flex justify-content-center">
                 <img className="detailImageFood" src={foodItem.image} alt="images" />
                 </div>
               </div>
           </div>
        </div>
    );
};

export default FoodDetails;