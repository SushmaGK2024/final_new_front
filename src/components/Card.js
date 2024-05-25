import React, { useState } from 'react';
import './Card.css'; // Import CSS file
import { FaInfo, FaAngleDown } from 'react-icons/fa'; // Import icons from react-icons library

const Card = ({ experience }) => {console.log(experience)
  {/*}  const { company_name, rollno, role_offered, overall_experience, batch , educational_criteria } = experience;
    const truncatedOverallExperience = overall_experience.slice(0, 150) + '...';
    const sentimentResult = sentiment.analyze(overall_experience);
    const sentimentColor = sentimentResult.score > 0 ? 'green' : sentimentResult.score < 0 ? 'red' : 'grey';
  
  
  const [infoActive, setInfoActive] = useState(false);

  const toggleInfo = () => {
    setInfoActive(!infoActive);
  };

  return (
    <div id="card" className="card">
      <div id="blur" className="blur">
        <div id="color" className="color"></div>
      </div>
      <div id="profile" className="profile">
        <h1>{company_name}</h1>
        <br /><br />
        <p>Role Offered : {role_offered}</p>
        <p>Batch : {batch}</p>
        <div style={{ color: sentimentColor , paddingBottom:"5px"}} className='sentiment'>
        <p>  Experience was : {sentimentResult.score > 0 ? 'Positive' : sentimentResult.score < 0 ? 'Negative' : 'Neutral'} </p>
        </div>
        <div className={`info ${infoActive ? 'active' : ''}`}>
          <FaInfo style={{color:"rgba(255, 255, 255, .6)", alignSelf:"center", marginTop:"8px"}} className="block" onClick={toggleInfo} />
       
          <p>Educational Criteria : {educational_criteria}</p>
          <p>Overall Experience : {truncatedOverallExperience}</p>
          <Link to={`/getexperience/${experience.experience_id}`}>
          <Button variant="primary">Read More</Button>
        </Link>
          <FaAngleDown style={{color:"white", marginTop:"200px", height:"50px",     background: "rgba(255, 255, 255, .6);"}} className="block" onClick={toggleInfo} />
        </div>
      </div>
    </div>
  );
*/}
return(
<div>
    
</div>
);
}

export default Card;
