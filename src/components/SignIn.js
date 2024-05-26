import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
const SignIn = ({ setcurrrollno }) => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between sign-in and sign-up
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSignIn = async () => {
    // Perform API call to authenticate user
    // Use the entered rollNo and password
    console.log("Signing in");
    try {
      const response = await fetch('https://backendf-fx8p.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNo,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log("Success");
        // Authentication successful, redirect to home page
        setcurrrollno(rollNo);
        history('/home');
        const token = data.token;
        const userId = data.userId;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        console.log("Token signin: ", localStorage.getItem('token'));
      } else {
        // Authentication failed, handle error
        console.error('Authentication failed:', data);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };



    const [email, setEmail] = useState('');
    const [rollnoup, setRollnoup] = useState('');
    const [passwordup, setPasswordup] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('https://backendf-fx8p.onrender.com/users/signup', {
          email : email,
          rollno :rollnoup,
          password: passwordup
        });
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.message);
      }
    };
  

  return (
    <div style={{ display: "flex", flexDirection: "column", paddingTop: "50px", paddingRight: "80px", justifyContent: "center", alignItems: "center", height: "65vh", marginBottom: "10%" }}>
      {isSignIn ? (
        <>
          <h2>Sign In</h2>
          <div>
            <label>
              Roll No:
              <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleSignIn}>Sign In</button>
          </div>
          <br/>
          <p>Don't have an account? <button onClick={() => setIsSignIn(false)}>Sign Up</button></p>
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <div style={{width : "30%"}}>
            {/* Add input fields and other necessary elements for signup */
             <div>
             
             <form onSubmit={handleSignup}>
               <input
                 type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
               />
               <input
                 type="text"
                 placeholder="Roll Number"
                 value={rollnoup}
                 onChange={(e) => setRollnoup(e.target.value)}
                 required
               />
               <input
                 type="password"
                 placeholder="Password"
                 value={passwordup}
                 onChange={(e) => setPasswordup(e.target.value)}
                 required
               />
                  <button onClick={handleSignup}>Sign Up</button>
             </form>
             {message && <p>{message}</p>}
           </div>}
        
          </div>
          <p>Already have an account? <button onClick={() => setIsSignIn(true)}>Sign In</button></p>
        </>
      )}
    </div>
  );
};

export default SignIn;
