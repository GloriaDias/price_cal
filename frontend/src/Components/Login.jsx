import React, { useState, useContext } from 'react'
import { context_Auth } from '../API/AuthContext'
import {Link} from "react-router-dom"
import "./style.css"
import { FaShoppingCart } from 'react-icons/fa';
import NavBar from './NavBar';
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>


export const Login = () => {

    const [form, setForm] = useState({})
    const {login} = useContext(context_Auth)

     
    const handleChange = (e) => {
        setForm({ 
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onLogin = (e) => {
        e.preventDefault();
        login(form)
    }

    
    return (
        <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link><form>
            

            <NavBar/>

            <div className="form-group container border items-login signin" >
                <h1 class="text-center">Sign In</h1>
                <input type="text" className="form-control mb-2 p" name="email" placeholder="Email ID" onChange={handleChange} />
                <br />
                <input type="password" className="form-control mb-2" name="password" placeholder="Password" onChange={handleChange} />
                <br />
                <div className='inner-div'>
                <button onClick={onLogin} className="btn mt-2 mb-3 signinButton">Login</button>
                </div>
                <br/>
                <p class="text-center">Don't Have an Account?
                <Link to="/register">
                <p className="signin">Sign Up now</p>
                </Link>
                </p> 
            </div>
        </form>
        <footer>
            <div className="footer" style={{textAlign:"center", verticalAlign:"middle", justifyContent: "center", alignItems: "center",fontSize: "15px"}}>
                    <br/><hr className="d" />
                    <img src="https://user-images.githubusercontent.com/293677/225102826-4df36db5-2a90-4348-8016-f6d040de9ce9.svg" alt="footerlogo" />    
                    <p>@ Copyright 2023</p> 
                </div>          
            </footer>
        
        </>
        
    )
}
