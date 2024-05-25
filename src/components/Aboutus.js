// components/AboutUs.js

import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Aboutus.css'
const Aboutus = (props) => {
  const {currrollno}=props;
  const history = useNavigate();
  useEffect(() => {
    if (!currrollno) {
      // Redirect to sign-in if currrollno is null
      history('/');
    }
  }, [currrollno]);
  return (
    <div className="about-us-container">
    <div className="header">
      <h1>About Us</h1>
    </div>
    <div className="section">
      <h2>Our Mission</h2>
      <p>To innovate and deliver impactful projects that solve real-world problems.</p>
    </div>
    <div className="section">
      <h2>Our Vision</h2>
      <p>To be leaders in technology and innovation, fostering a culture of continuous learning and collaboration.</p>
    </div>
    <div className="section">
      <h2>Our Journey</h2>
      <p>As final-year BTech students from NIT Jalandhar, we have embarked on a journey of discovery and learning, culminating in projects that reflect our dedication and passion for technology.</p>
    </div>
    
    <div className="section">
      <h2>Contact Us</h2>
      <p>Email: info@nitj.ac.in</p>
      <p>Phone: (+91) 1234567890</p>
    </div>
  </div>
  );
};

export default Aboutus;
