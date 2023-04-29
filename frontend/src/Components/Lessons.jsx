import React, { useContext, Component } from 'react';
import {Link} from "react-router-dom"
import './Lessons.css'
import { FaShoppingCart } from 'react-icons/fa';
import "./home.css"
import { context_Auth } from '../API/AuthContext'
import axios from 'axios';
import NavBar from './NavBar';


class Lessons extends Component {
  state = {
    // getAllCategories: ,
    courses: [],
    lessons: [],
    storedValue: ""

  };
  
  componentDidMount(){
    // console.log("hello");    
    const customer = sessionStorage.getItem("customer");
    console.log(customer);
    if (customer) {
      this.setState({ storedValue: customer });
    }
    axios.get('http://localhost:3001/lessons')
      .then(response => {        
        this.setState({ courses: response.data.courses, lessons: response.data.lessons });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }  
   render(){ return (
        <div>

            <NavBar/>

            <hr className="d" />

            <h2 className="titles">Find courses of your choice</h2>
            <div className="serach-bar">
                <input type="text" placeholder="search..." />
                <button>Go!</button>
            </div>

            <hr/>

            <h2 className="titles">Popular Course we provide</h2>
            <div className="provide">
               {this.state.courses.map(course => (
                <div>
                    <img width='300px' height="200px" src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2021/07/1_ngkHgQq7ij1NBNr62er3zA.png?fit=640%2C469&ssl=1" alt=""/>
                    <h4>{course.course_name}</h4>
                </div>
              ))}
                
            </div>

            <div className="many">
            {this.state.lessons.map(lesson => {
                // if (lesson.course_id === 1) {
                  return (
                    <div style={{display:'flex'}}>
                      <img width="100px" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/28/5c270e9a294a86a5522300d31c6108/Specialization-Logo.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25" alt=""/>
                      <div>
                        <h4>{lesson.topic_name}</h4>
                        <p>$650</p>          
                        <Link to={{ pathname: '/lesson', search: `?lessonid=${lesson.topic_id}` }}><p>Click Here</p></Link>              
                      </div>
                    </div>
                  );
                // } else {
                //   return null; // or you can return a different component or JSX here
                // }
              })}                              
            </div>
            <footer>
            <div className="footer" style={{textAlign:"center", verticalAlign:"middle", justifyContent: "center", alignItems: "center",fontSize: "15px"}}>
                    <hr className="d" />
                    <img src="https://user-images.githubusercontent.com/293677/225102826-4df36db5-2a90-4348-8016-f6d040de9ce9.svg" alt="footerlogo" />    
                    <p>@ Copyright 2023</p> 
                </div>          
            </footer>
        </div>
     )
    }
}

export default Lessons
