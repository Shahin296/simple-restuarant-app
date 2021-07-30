import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../Firebase/firebase-config';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";

export let auth = false;


firebase.initializeApp(firebaseConfig);

const SignIn = () => {
 
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    })
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        newUser: false,
        firebaseError: ""
    })
    

    const handleBlur = (e)=>{
         const {name, value} = e.target;
         let isValidUser = false;
         if(name === "name"){
             if(value.length > 0){
                 isValidUser = true
                 setError(prevError =>{
                     return {
                         ...prevError,
                         nameError: ""
                        }
                     })
    
                
             } else{
                setError(prevError =>{
                    return {
                        ...prevError,
                        nameError: "name is required*"
                    }
                    })
                isValidUser = false
             }
         } else if(name === "email"){
             if(/\S+@\S+\.\S+/.test(value) === true){
                isValidUser = true
                setError(prevError =>{
                    return {
                        ...prevError,
                        emailError: ""
                    }
                    })
               } else {
                setError(prevError =>{
                    return {
                        ...prevError,
                        emailError: "invalid email address*"
                    }
                    })
                isValidUser = false  
               }
         } else if(name === "password"){
             if(value.length >= 6){
                isValidUser = true
                setError(prevError =>{
                    return {
                        ...prevError,
                        passwordError: ""
                    }
                    })
             } else{
                setError(prevError =>{
                    return {
                        ...prevError,
                        passwordError: "password can't be less than 6 letter*"
                    }
                    })
                isValidUser = false  
             }
         } else if(name === "confirmPassword"){
             if(user.password === value){
                isValidUser = true
                setError(prevError =>{
                    return {
                        ...prevError,
                        confirmPasswordError: ""
                    }
                    })
             } else{
                setError(prevError =>{
                    return {
                        ...prevError,
                        confirmPasswordError: "password doesn't match*"
                    }
                    })
                isValidUser = false  
             }
         }
         
      if(isValidUser === true){
            setUser(prevValue =>{
           return  {
               ...prevValue,
               [name] : value,
               newUser: true
            }
            })
      }
    }
    let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = (event) =>{
         if(user.newUser){
             if(user.email && user.password && user.confirmPassword && user.name){
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((userCredential) => {
                        setUser(prevValue=>{
                            return{
                                ...prevValue,
                                firebaseError:""
                            }
                        })
                        history.replace(from);
                        auth = true
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                         setUser(prevValue=>{
                             return{
                                 ...prevValue,
                                 firebaseError:errorMessage
                             }
                         })
                    });
             }
         }
       
         event.preventDefault()
    }


    
    return (
        <div className="container signIn">
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <img className="w-25" src="/images/logo.png" alt="" />
                <form onSubmit={handleSignIn}>
                <input onBlur={handleBlur} name="name" type="text" className="form-control sign-form"  placeholder="Name" />
                <span style={{color: "red", fontSize: "12px"}}>{error.nameError}</span>
                <input onBlur={handleBlur}  name="email"  type="email" className="form-control sign-form"  placeholder="Email"/>
                <span style={{color: "red" , fontSize: "12px"}}>{user.firebaseError}</span>
                <span style={{color: "red" , fontSize: "12px"}}>{error.emailError}</span>
                <input onBlur={handleBlur} name="password"  type="password" className="form-control sign-form"  placeholder="Password" />
                <span style={{color: "red" , fontSize: "12px"}}>{error.passwordError}</span>
                <input onBlur={handleBlur} name="confirmPassword"  type="password" className="form-control sign-form"  placeholder="Confirm Password" />
                <span style={{color: "red" , fontSize: "12px"}}>{error.confirmPasswordError}</span>
                <input  style={{backgroundColor: "red", color:"#fff"}} value="Sign In" type="submit" className="form-control sign-form" />
                </form>
                <Link style={{color:"red", textDecoration: "none", padding: "10px"}} to="/login">Already Have an account ?</Link>
            </div>
        </div>
    );
};

export default SignIn;