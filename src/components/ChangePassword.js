import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ChangePassword = (props) => {
  const {currrollno}=props;
  const history = useNavigate();
  useEffect(() => {
    if (!currrollno) {
      // Redirect to sign-in if currrollno is null
      history('/');
    }
  }, [currrollno]);
   const curr_rollno=useParams()
   const rollno =curr_rollno.currrollno;
   console.log("currrollno in pass ",rollno)
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangePassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    const data = {
      currentPassword,
      newPassword
    };

    try {
      const response = await axios.post(`https://backendf-fx8p.onrender.com/users/change-password/${rollno}`, data, config);
      console.log("Response:", response.data);
      alert("Password changed successfully!");
    } catch (error) {
      console.error('Error changing password:', error);
      setErrorMessage('Error changing password. Please try again.');
    }
  };

  return (
    <div className='change-pass-container' >
      <h2 style={{display:"flex", justifyContent:"center"}}>Change Password</h2>
      <div style={{paddingTop:"20px"}}>
        <label>Current Password:</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div style={{paddingTop:"20px"}}>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div style={{paddingTop:"20px"}}>
        <label>Confirm New Password:</label>
        <input
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleChangePassword} style={{marginTop:"20px"}}>Change Password</button>
      <style>
        {`
        .change-pass-container {
          background : azure ;
          padding : 3% ;
          border-radius : 0.4rem;
          width : 40%;
          margin-left:30%;
          margin-bottom : 20px;
        }
          @media (max-width: 768px) {
            .form-group label {
              display: block;
              margin-bottom: 5px;
            }
            .form-input {
              width: 100%;
            }
            .form-button {
              width: 100%;
            }
            .change-pass-container {
              background : azure ;
              padding : 3% ;
              border-radius : 0.4rem;
              width : 80%;
              margin-left:10%;
              margin-right : 10%;
              margin-bottom : 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ChangePassword;
