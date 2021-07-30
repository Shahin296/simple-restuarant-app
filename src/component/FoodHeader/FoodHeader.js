import React from 'react';
import "./FoodHeader.css"
import {Link} from "react-router-dom"
import { useLocation } from 'react-router';

const FoodHeader = () => {

    const location = useLocation()
    let breakFastColor = {
        color:"",
        textDecoration: ""
    }
    let LunchColor = {
        color:"",
        textDecoration: ""
    }
    let dinnerColor = {
        color:"",
        textDecoration: ""
    }
    if(location.pathname ==="/breakfast"){
        breakFastColor.color = "red";
        breakFastColor.textDecoration = "underline"
    } else if(location.pathname==="/"){
        LunchColor.color = "red";
        LunchColor.textDecoration = "underline"
    } else if(location.pathname==="/dinner"){
        dinnerColor.color = "red";
        dinnerColor.textDecoration = "underline"
    }
     
    return (
        <div className="foods">
            <ul className="d-flex justify-content-center">
                <li><Link style={breakFastColor} className="link" to="/breakfast">Breakfast</Link></li>
                <li><Link style={LunchColor} className="link" to="/">Lunch</Link></li>
                <li><Link style={dinnerColor} className="link" to="/dinner">Dinner</Link></li>
            </ul>
        </div>
    );
};

export default FoodHeader;