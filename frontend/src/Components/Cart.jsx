import {React,useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
// import Select from 'react-select'
// import { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';

//import "./cart.css"
import "./style.css"
import NavBar from './NavBar';

export const Cart = () => {
const [cart, setCart] = useState([]);
const [taxes, setTaxes] = useState(0);
const [total, setTotal] = useState(0);
const [subTotal, setSubTotal] = useState(0);
const [msg,setMsg] = useState("");



const onCancelClick = () => {
    sessionStorage.removeItem("cart");
    setCart([]);
}


useEffect(() => {
    
    if(JSON.parse(sessionStorage.getItem("cart")) != null){
      setCart(JSON.parse(sessionStorage.getItem("cart")));
      // console.log(JSON.parse(sessionStorage.getItem("cart")));

      let totalSalesTax = 0;
      let subTotal = 0;
      let totalRounded = 0;
      for (const key in cart) {
        const salesTax = cart[key].totalPrice.SalesTax;
        const subTotal2 = cart[key].totalPrice.SubTotal2;
        const total = cart[key].totalPrice.TotalRounded;
        totalSalesTax += salesTax;
        subTotal += subTotal2;
        totalRounded += total;
      }       
      setTaxes(totalSalesTax)
      setSubTotal(subTotal)
      setTotal(totalRounded)
    }    
    else{
      setMsg("please fill the cart")
    }    
  }, [cart]);


    return (
        <div>

            <NavBar/>
            <hr className="d"/>

            <div className="container-one">
             <div className="row">
                <div className="col-9"> 
                <h2>Confirm Course</h2>
                <hr className="d" />
                {   Object.keys(cart).length === 0 ? <h1>{msg}</h1> : 
                     Object.keys(cart).map(key => (
                    <div className="lesson">
                <div style={{display:'flex'}}>
                    <img width="200px" src="images/pottery.jpg" alt="pottery"/>
                    <div>
                        <h4>{cart[key].lessonName}</h4>
                        <div>

                        </div>
                        <p>{cart[key].totalPrice.SubTotal2} $</p>                                                
                    </div>
                </div>

                <div class= "row">
                    <div class="col-md-2">
                        <p>Number of Hours</p>
                        <p>{cart[key].noOfHours}</p>
                    </div>
                    <div class="col-md-2">
                        <p>Number of Students</p>
                        <p>{cart[key].noOfStudent}</p>
                    </div>
                    <div class="col-md-2">
                        <p>Number of Teachers</p>
                        <p>{cart[key].noOfTeacher}</p>
                    </div>
                </div>               
                </div>
                  ))}
                
                </div>
                <div className="col-3 cartSummaryTitle">
                    <h2>Summary</h2>
                    <hr className="d" />
                    <div className="cartSummary">
                        <h3>Subtotal</h3>
                        <p> {subTotal} $</p>
                    </div>
                    
                    <hr className="d" />
                    <div className="cartSummary">
                        <h3>Taxes</h3>
                        <p>    {taxes}</p>
                    </div>
                    <hr className="d" />
                    <div className="cartSummary">
                        <h3>Total</h3>
                        <h4>{total} $</h4>
                    </div>

                </div> 
               
            </div>
            <div className="container-one"></div>
                <div className='inner-div'>
                    <button className="btn mt-4 mb-3 signinButton">Confirm</button>
                    <button className="btn mt-4 mb-3 cancel" onClick={onCancelClick}>Cancel</button>
                </div>

        </div>
        <hr className="d" />
    </div>
    )
}
