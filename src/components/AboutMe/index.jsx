import React from 'react';
import  { useState } from 'react';
import './aboutMe.scss';
import aboutMeData from '../../datas/skills.json';
function AboutMe() {
 
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const handleClick = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <section id="aboutme" className="aboutMe" onClick={handleClick}>
      <h2>À propos</h2>
      <div className='textDiv'>
        {showAdditionalText && 
          <div className="visible">
            {aboutMeData.aboutMe[0].desc.map((description, index) => (
              <p key={index}><em>{description}</em></p>
            ))}
        </div>}
        <p className="visible"><em>{aboutMeData.aboutMe[0].accr}</em></p>
      </div>    
      <button className="openTextBtn">          
        <span className="plusDiv">
          {!showAdditionalText ? (
          <i className="fa-solid fa-angle-down" title="Plus d'infos"></i>
          ):(
          <i className="fa-solid fa-angle-up" title="Fermer"></i>
          )}
        </span>
      </button>
    </section>
  )
}
export default AboutMe;