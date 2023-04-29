import React, { createContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {Navigate } from 'react-router-dom';


export const context_Auth = createContext();

export const AuthContext = (props) => {
    const navigate = useNavigate();

    const register = async (data) => {
        axios.post("http://localhost:3001/user/register"
        ,{
            name: data.name,
            email: data.email,
            password: data.password
        }).then((res)=>{  
            console.log("customer created");
            sessionStorage.setItem("customer", res.data);
            navigate('/lessons');
        }).then((res)=>{
            console.log(res.status);        
            if(res.status === 200){

                return <Navigate to='/Lessons'  />
            }
            console.log(res.status);
        }).catch((err)=>{
            console.log(err);      
        })
    }

    const login = async (data) => {
    
        axios.post("http://localhost:3001/user/login"
        ,{
            email: data.email,
            password: data.password
        }).then((res)=>{  
            sessionStorage.setItem("customer", res.data);
            navigate('/lessons');
        }).then((res)=>{
            console.log(res.status);        
            if(res.status == 200){
                return <Navigate to='/lessons'  />
            }
            console.log(res.status);
        }).catch((err)=>{
            console.log(err);      
        })
        

    }

    const getAllCategories = async (data) => {
        axios.get("http://localhost:3000/user/categories"
        ).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);            
        })
    }

    

    return (
        <div>
            <context_Auth.Provider 
                value={{
                    register,
                    login,
                    getAllCategories
                }}
            >
                {props.children}
            </context_Auth.Provider>
        </div>
    )
}
