import React from "react"
import FoodHeader from "./component/FoodHeader/FoodHeader"
import Header from "./component/Header/Header"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Lunch from "./component/Lunch/Lunch"
import Breakfast from "./component/Breakfast/Breakfast"
import Dinner from "./component/Dinner/Dinner"
import { createContext } from "react"
import { useState } from "react"
import FoodDetails from "./component/FoodDetails/FoodDetails"
import DeliveryDetails from "./component/FoodDetails/DelebaryDetails";
import Login from "./component/Login/Login"
import SignIn from "./component/Login/SignIn"
import PrivateRoute from "./component/PrivateRoute/PrivateRoute"


export const FoodContext = createContext()

function App() {

 const [detail, setDetail] = useState({});
 
return (
  <FoodContext.Provider value={[detail, setDetail]}>
   <BrowserRouter>
     
      <Switch>
         <Route path="/" exact><Lunch/></Route>
         <Route path="/breakfast"><Breakfast/></Route>
         <Route path="/dinner"><Dinner/></Route>
         <Route path="/foodDetails/:foodId">
         <FoodHeader/>
         <FoodDetails  />
         </Route>
         <PrivateRoute path="/DeliveryDetails">
         <FoodHeader/>
         <DeliveryDetails detail={detail}/>
         </PrivateRoute>
         <Route path="/login">
         <FoodHeader/>
         <Login/>
         </Route>
         <Route path="/signIn">
         <FoodHeader/>
         <SignIn/>
         </Route>
      </Switch>
  </BrowserRouter> 
</FoodContext.Provider>
  );
}

export default App;
