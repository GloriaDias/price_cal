import React, { useEffect,useContext, useState } from 'react'
import './lesson.css'
import {Link,useLocation} from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component'
import { context_Auth } from '../API/AuthContext'
import queryString from 'query-string';
import axios from 'axios';
import NavBar from './NavBar';

function Lesson() {
    const [storedValue, setStoredValue] = useState("");

    const location = useLocation();
    const [lesson,setLesson] = useState([]);
    const [price,setPrice] = useState({});
    const [totalPrice,setTotalPrice] = useState('');
    const {lessonid} = queryString.parse(location.search);
    const [selectedNoOfTeacher, setSelectedNoOfTeacher] = useState("");
    const [selectedNoOfStudent, setSelectedNoOfStudent] = useState("");
    const [selectedNoOfHrs, setSelectedNoOfHrs] = useState("");
    const [lessionId, setLessonId] = useState("");
    const [cart, setCart] = useState({});    
    
    const handleNoOfTeacherChange = (event) => {
        setSelectedNoOfTeacher(event.target.value);
    };
    const handleNoOfStudentChange = (event) => {
        setSelectedNoOfStudent(event.target.value);
    };
    const handleNoOfHrs = (event) => {
        setSelectedNoOfHrs(event.target.value);
    };        
    const handleClick = async () => {
        // Do something with the selected option
        if(selectedNoOfStudent === "" || selectedNoOfTeacher === ""){
            console.log("Please select values first");
        } else{
            let data = {
                noOfHours: selectedNoOfHrs,
                noOfStudent: selectedNoOfStudent,
                noOfTeacher: selectedNoOfTeacher,
            }
            async function fetchData() {
                await axios.get ('http://localhost:3001/product/price',{params :data})
                    .then(response => {        
                        // setLesson(response.data)
                        setPrice(response.data)
                        setTotalPrice(response.data.TotalRounded)
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });        
              }
              
              fetchData();    

              console.log(price);
        }        
      };
    useEffect(() =>  {        
        const value = sessionStorage.getItem("customer");
        if (value) {
          setStoredValue(value);
        }
        async function fetchData() {
            await axios.get ('http://localhost:3001/product/lesson',{params :{ lessonid}})
                .then(response => {        
                    setLesson(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });        
          }
          
          fetchData();
                    
        
      },[totalPrice]);
    
    const addToCart = async () => {
        await handleClick();
        if(selectedNoOfHrs != "" || selectedNoOfStudent != "" || selectedNoOfTeacher != ""){
        // setLessonId(lesson.topic_id);
        console.log(totalPrice);
        const data ={ [lesson.topic_id] : {
            lessonid : lesson.topic_id,
            lessonName : lesson.topic_name,
            noOfHours: selectedNoOfHrs,
            noOfStudent: selectedNoOfStudent,
            noOfTeacher: selectedNoOfTeacher,
            totalPrice : price

        } }

        let previousData = sessionStorage.getItem("cart");
        if(previousData)
        {
            let mergedData = Object.assign({}, data, JSON.parse(previousData));
            sessionStorage.setItem("cart", JSON.stringify(mergedData) )
        } else{
            sessionStorage.setItem("cart", JSON.stringify(data) )
        }
        
        // axios.post('http://localhost:3001/api/add-to-cart', data )
        //   .then(response => console.log(response));
     }
    };

     
    return (
        <div>
            <NavBar />

            <hr className="d"/>    

            <div className="lesson">
                <div className='first'>
                    <img className='imgLesson' src="data:image/jpeg;base64,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" alt=""/>                
                </div>
                <div className='second'>                
                    <h2>{lesson.topic_name}</h2>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ReactStars
                        count={5}
                        value={4} 
                        edit={false} 
                        size={24}
                        activeColor="#ffd700"
                    />

                    <p style={{ marginLeft: '10px' }}>150 reviews</p>
                    </div>

                    <hr/>
                    <div style={{display:'flex'}}>
                    <div class= "row">
                    <div class="col-md-2">
                    <select name="" id="" onChange={handleNoOfTeacherChange}>
                            <option value="">Select no. of teacher</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        </div>                       
                        <div class="col-md-2">
                        <select name="" id="" onChange={handleNoOfStudentChange}>
                            <option value="">Select no. of Students</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select> 
                        </div>
                        <div class="col-md-2">
                        <select onChange={handleNoOfHrs}>
                            <option value="" disabled selected>No of Hours</option>                            
                            <option value="1.5">1.5</option>
                            <option value="6">6</option>
                            <option value="12">12</option>                        
                        </select> 
                    </div>
                    </div>
                     {/*    <h4 style={{marginRight:'60px', color:'black'}}>Duration : {lesson.duration} hrs</h4> */}
                    </div>
                    <div>
                        <h4>{totalPrice} $</h4>
                    </div>

                        <hr/>
                        <p style={{color:'black'}}>{lesson.description}</p>
                        <hr/>
                        <button className="cartButton" onClick={handleClick} style={{marginRight:20}}>Calculate Price</button>                        
                        {Object.keys(price).length === 0 ? <p>Calculate price to book this corse</p> : <button className="cartButton" onClick={addToCart}>Add to cart</button> }
                        
                </div>
            </div>

            <footer>
            <div className="footer" style={{textAlign:"center", verticalAlign:"middle", justifyContent: "center",alignItems:"center",fontSize: "15px"}}>
                    <br/><hr className="d" />
                    <img src="https://user-images.githubusercontent.com/293677/225102826-4df36db5-2a90-4348-8016-f6d040de9ce9.svg" alt="footerlogo" />    
                    <p>@ Copyright 2023</p> 
                </div>          
            </footer>


        </div>
    )
}

export default Lesson
