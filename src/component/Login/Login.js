import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth"
import secondaryAppConfig from '../Firebase/firebase-config-second';



export let logAuth = false;


firebase.initializeApp(secondaryAppConfig, "secondary");

const Login = () => {

const [logUser, setLogUser] = useState({
    email: "",
    password: "",
    firebaseLogError: ""
})

const handleLogBlur = (e)=>{
    const {name, value} = e.target;

    setLogUser(prevValue =>{
      return {
          ...prevValue,
          [name]: value 
      }
    })

}

let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

const handleLogin = (event)=>{

    firebase.auth().signInWithEmailAndPassword(logUser.email, logUser.password)
   .then((userCredential) => {
   
   setLogUser(prevValue=>{
       return{
           ...prevValue,
           firebaseLogError: ""
       }
   })
   logAuth = true;
   history.replace(from);

  })
  .catch((error) => {
    console.log(error.message)
    setLogUser(prevValue=>{
        return{
            ...prevValue,
            firebaseLogError: error.message
        }
    })
  });

//    }
event.preventDefault()
 
}

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center signIn">
        <img className="w-25" src="/images/logo.png" alt="" />
            <form onSubmit={handleLogin}>
                <input name="email" onBlur={handleLogBlur} type="email" className="form-control sign-form"  placeholder="Email" required/>
                <input name="password" onBlur={handleLogBlur} type="password" className="form-control sign-form"  placeholder="Password" required/>
                <input style={{backgroundColor: "red", color:"#fff"}} value="Log In" type="submit" className="form-control sign-form" />
                <span style={{color: "red" , fontSize: "12px"}}>{setLogUser.firebaseLogError}</span>
            </form>
            <Link style={{color:"red", textDecoration: "none"}} to="/signIn">create new account</Link>
        </div>
    );
};

export default Login;