import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react'
import {useEffect} from 'react'
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import  Payment  from "./Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'


const promise=loadStripe('pk_test_51LDnSaSHUDwIvJlBbMuaJvPl2Uvbslz9tWiU8bdsjzmYnZLnB6GBXhrgqpHXqVyr7rAl3o7rvfMo9jgqY8iZMHG800DUfY1N4M');
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment/></Elements>]} />
          <Route path = "/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
