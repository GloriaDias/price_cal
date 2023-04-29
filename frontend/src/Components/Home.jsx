import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import "./home.css"

import { Link } from 'react-router-dom'
import './home.css'
import NavBar from './NavBar'




export const Home = () => {
    return (
        <div>

           <NavBar/>

            <hr className="d"/><br/>

            <div className="container-one">

                <div className="row main">
                    <div className="col-6">
                        <h1>Union Pricing <br />Calculator</h1>
                        <p> Start, switch or advance your career with various courses, Professional Certificates and degrees from world-class universities and companies <br />
                    Choose from many topics, skill levels and languages, Professional skills</p>
                       
                      
                    
                        <Link to="/lessons">
                            <p> <button className="browseCoursesButton">BROWSE COURSES</button> </p>
                        </Link>
                        {/* <button className="browseCoursesButton"><a href="Courses.html">BROWSE COURSES</a></button> */}
                    </div>
                    <div className="col-4">
                        <img className="rounded" src="images/homepage.webp" alt="homepageImage" width={420} height={400} />

                    </div>
                    <div className="col-1" />
                </div>

                <div className="row2">
                <p>Learn without limits</p>
                </div>
            </div>
    
                
            
        
    

                <div className="row2">
                    <p> Start, switch or advance your career with various courses, Professional Certificates and degrees from world-class universities and companies <br />
                    Choose from many topics, skill levels and languages, Professional skills</p>
                </div>
            

            
            <br/><br/>
            <div>
                <h3>Our Advantages</h3>
                <br></br>
                <div className="row adv">
                    <div className='col-3'>
                        <img src="images/adv1.jpg" width="30" height="30" alt='advance'></img><br/>
                        <h4>Overview</h4>
                        <p>Drive transformation with job-based learning for digital and many other courses.</p>
                    </div>
                    <div className='col-3'>
                        <img src="images/adv2.jpg" width="30" height="30" alt='advance2'></img><br/>
                        <h4>Guided Projects</h4>
                        <p>Increase skills proficiency and durability with applied learning</p>
                    </div>
                    <div className='col-3'>
                        <img src="images/adv3.jpg" width="35" height="35" alt='advance3'></img><br/>
                        <h4>World-Class content</h4>
                        <p>Offers learners content and exporsure from top universities</p>
                    </div>
                </div>
            </div>
            <br/><br/>
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
