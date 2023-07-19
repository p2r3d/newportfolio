import React, {useState} from 'react';
import Collapse from '../../components/Collapse'
import './skills.scss'
import Skills from "../../datas/skills.json";

function SkillsS() {
  // ensemble des données des projets
  const [skillState] = useState(Skills);
  return (
    <section id="skills" className='skillsSection'>
      <h2>Compétences</h2>
      {/*<div className='skillsDiv'>
        <div className="colDiv">
        <i className="fas fa-desktop"></i>
          <h3>Front-end</h3>
          <ul>
            <li>HTML5 / CSS3</li>
            <li>Javascript</li>
            <li>React JS</li>         
          </ul>
        </div>
        <div className="colDiv">
           <i className="fas fa-database"></i>
          <h3>Back-end</h3>
          <ul>
            <li>Node js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="colDiv">
          <i className="fas fa-bullseye"></i>
          <h3>Stratégies</h3>
          <ul>
            <li>Référencement SEO</li>
            <li>Optimisation</li>
            <li>Performances</li>
            <li>Accessibilité</li>
            <li>Green code</li>
          </ul>
        </div>
        <div className="colDiv">
          <i className="fas fa-screwdriver" size="3x"></i>
          <h3>Outils</h3>
          <ul>
            <li>Visual Studio Code</li>
            <li>Github</li>
            <li>Figma</li>
          </ul>
        </div>       
      </div>*/}
      <div className="skillsGrid">
        {skillState.skills.map((skill) => (
          <Collapse key={skill.id} title={skill.title} description={skill.Description} />
        ))}
      </div>
    </section>
  )
}
export default SkillsS;