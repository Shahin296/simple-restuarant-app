import React from 'react';
import { useState } from 'react';
import "./Delivery.css"


const DelebaryDetails = ({detail}) => {
  
   const {foodItem, quantity} = detail;
   let setQuantit = quantity === undefined ? 0 : quantity;
   const [initialQuantity, setQuantity] = useState(setQuantit)
    let foodItems = foodItem;
   if(foodItem === undefined ){
       foodItems = {};
   }
  
const handleQuantityIncrease = ()=>{
    setQuantity(initialQuantity + 1)
}
const handleQuantityDecrese = ()=>{
    setQuantity(initialQuantity - 1)
}

const totalPriceOfFood = parseInt(foodItems.price * initialQuantity); 
console.log(initialQuantity)
    return (
        <div className="container delivery-section">
              <div className="row">
                  <div className=" col-lg-6 d-flex justify-content-center">
                     <div>
                     <h3>Edit Delivery Details</h3>
                      <hr />
                      <input type="email" class="form-control delivery-form-control"  placeholder="Deliver to door"/>
                      <input type="email" class="form-control delivery-form-control"  placeholder="107 road No:8"/>
                      <input type="email" class="form-control delivery-form-control"  placeholder="Flat name"/>
                      <textarea class="form-control delivery-form-control" rows="2" placeholder="Add deliver instructor"></textarea>
                      <input type="submit" class="form-control form-control-bg"/>
                     </div>
                  </div>
                  <div className="col-lg 6 d-flex justify-content-center ">
                      <div>
                      <p>From <strong>Gulshan Pizza Restuarant GPR</strong></p>
                       <p>Arriving in 20-30 min</p>
                        <p>107 Road No:8 </p>
                        <div className="foodCard d-flex justify-content-between align-items-center" style={{maxWidth:"560px"}}>
                           <div className="w-25">
                               <img className="w-100" src={foodItems.image} alt="" />
                           </div>
                           <div className="w-25">
                              <strong>{foodItems.name}</strong> 
                              <h6>${totalPriceOfFood}</h6> 
                              <p>Deliver to</p>                         
                           </div>
                           <div className="w-25">
                           <button onClick={handleQuantityIncrease} className="changingBtnDeliver">+</button> {initialQuantity} <button onClick={handleQuantityDecrese} 
                           className="changingBtnDeliver">-</button>                              
                           </div>
                       </div>
                      </div>
                  </div>
              </div>
        </div>
    );
};

export default DelebaryDetails;