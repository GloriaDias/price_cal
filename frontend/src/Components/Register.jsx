import React, { useState, useContext } from 'react'
import { context_Auth } from '../API/AuthContext';
import {Link} from "react-router-dom"
import "./style.css"
import NavBar from './NavBar';

export const Register = () => {

    const [form, setForm] = useState({})
    const {register} = useContext(context_Auth)
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onRegister = (e) => {
        e.preventDefault();
        register(form)
    }

    return (
        <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

           
           <NavBar/>

        
        <div className="form-group container  items-login signin ">
                <h1 class="text-center">Register</h1>
                <input type="text" className="form-control mb-2 p" name="name" placeholder="Full name" onChange={handleChange} />
                <br />
                <input type="email" className="form-control mb-2 p" name="email" placeholder="Email" onChange={handleChange} />
                <br />
                <input type="password" className="form-control mb-2 p" name="password" placeholder="Password" onChange={handleChange} />
                <br />
                <input type="password" className="form-control mb-2 p" name="cpassword" placeholder="Confirm Password" onChange={handleChange} />
                <br />
                <div className='inner-div'>
                 <button onClick={onRegister} className="btn signinButton">Sign Up</button>
                </div>
                <p class="text-center">Already have an Account??
                <Link to="/login">
                <p className="signin">Sign In</p>
                </Link>
                </p>
        </div>
            <footer>
            <div className="footer" style={{textAlign:"center", verticalAlign:"middle", justifyContent: "center", alignItems: "center",fontSize: "15px"}}>
                    <hr className="d" />
                    <img src="https://user-images.githubusercontent.com/293677/225102826-4df36db5-2a90-4348-8016-f6d040de9ce9.svg" alt="footerlogo" />    
                    <p>@ Copyright 2023</p> 
                </div>          
            </footer>
            </>

    )
}
