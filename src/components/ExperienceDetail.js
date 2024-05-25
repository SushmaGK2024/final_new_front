import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './ExperienceDetail.css'; // Import the CSS file

const ExperienceDetail = ({ currrollno }) => {
  const history = useNavigate();

  useEffect(() => {
    if (!currrollno) {
      // Redirect to sign-in if currrollno is null
      history('/');
    }
  }, [currrollno, history]);

  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/experiences/getexperience/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setExperience(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching experience:', error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!experience) {
    return <p>Error fetching experience</p>;
  }

  const { company_name, rollno, role_offered, overall_experience, tips } = experience;

  return (
    <div className="experience-container">
      <div className="experience-detail-card">
        <div className="experience-content">
          <div className="experience-inner">
            <div className="experience-header">
              <h1 className="experience-company">{company_name}</h1>
            </div>
            <h3 className="experience-added-by">Added by: {rollno}</h3>
            <h3 className="experience-role">Role Offered: {role_offered}</h3>
            <h3 className="experience-overall-title">Overall Experience:</h3>
            <p className="experience-overall">{overall_experience}</p>
            <h2 className="experience-tips-title">Tips:</h2>
            <p className="experience-tips">{tips}</p>
          </div>
        </div>
        <Button variant="secondary" className="back-button" onClick={() => window.history.back()}>Back</Button>
      </div>
    </div>
  );
};

export default ExperienceDetail;
