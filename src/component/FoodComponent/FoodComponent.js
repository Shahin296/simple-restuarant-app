import React from 'react';
import { Link } from 'react-router-dom';
import "./FoodComponent.css";


const FoodComponent = ({item}) => {

  


    return (
        <div className="container">
        <div className="row">

            {
            item.map((foodItem, index) => (
                <div key={index} className="col-md-6 col-lg-4 col-sm-6 d-flex justify-content-center">
                   
                    <div className="card" style={{width: "18rem"}}>
                    <Link style={{color:"#000", textDecoration:"none"}} to={"/foodDetails/" + foodItem._id}>
                     <img src={foodItem.image} className="card-img-top w-50" alt="..."/>
                     </Link>
                     <div className="card-body">
                     <h6 className="card-title ">{foodItem.name}</h6>
                     <p className="card-name">{foodItem.initialDescript}</p>
                     <h4 className="card-title">${foodItem.price}</h4>
                    </div>
                   </div>
                  
                 </div>
            ))   
            }
            
          </div>
        </div>
    );
};

export default FoodComponent;