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
      <div className="skillsGrid">
      {/*itération sur chaque compétence du tableau skillState.skills 
      Collapse rendu pour chacune des compétences avec ses titre, description, image, niveau*/}
        {skillState.skills.map((skill) => (
          <Collapse 
          key={skill.id} 
          title={skill.title} 
          description={skill.Description} 
          image={skill.icon}
          rating={skill.rating}  
          />
        ))}
      </div>
    </section>
  )
}
export default SkillsS;