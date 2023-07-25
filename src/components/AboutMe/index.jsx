import React from 'react';
import  { useState } from 'react';
import './aboutMe.scss';
import aboutMeData from '../../datas/skills.json';
function AboutMe() {
  //e hook useState avec variable d'état locale showAdditionalText, le texte est réduit à la phrase d'accroche
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  // fonction qui met à jour la valeur de showAdditionalText
  const handleClick = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <section id="aboutme" className="aboutMe" onClick={handleClick}>
      <h2>À propos</h2>
      <p className="visible"><em>{aboutMeData.aboutMe[0].accr}</em></p>
      {/* le texte supplémentaire est affiché si showAdditionalText, visible donne l'animation en douceur*/}
      <div className={`textDiv ${showAdditionalText ? "visible" : "textDescription"}`}>
        {showAdditionalText && 
          <div className='textDescription'>
             {/*map sur la partie aboutme (description) du fichiers skills.json*/}
            {aboutMeData.aboutMe[0].desc.map((description, index) => (
              <p key={index}><em>{description}</em></p>
            ))}
        </div>}
        
      </div>    
      <button className="openTextBtn">          
        <span className="plusDiv">
        {/*si showAdditionalText est false la flèche est vers le bas, sinon vers le haut*/}
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