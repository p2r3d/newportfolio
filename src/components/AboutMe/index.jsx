import React from 'react';
import  { useState } from 'react';
import './aboutMe.scss'

function AboutMe() {
 
  const [showAdditionalText, setShowAdditionalText] = useState(false);
  const handleClick = () => {
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <section id="aboutme" className="aboutMe" onClick={handleClick}>
      <h2>À propos</h2>
      <div className='textDiv'>
        {showAdditionalText && <div className='textDiv'><p className="visible"><em>Informaticienne depuis les années 2000, une pause dédiée à ma famille et 
        j'ai retrouvé le monde des technologies numériques en suivant une formation diplômante de Développeur Web chez Openclassrooms.
         </em></p>
        <p><em>J'ai ainsi acquis les compétences nécessaires pour devenir <strong>une développeuse web polyvalente</strong>, 
        utilisant les langages de programmation tels que <strong>HTML5</strong>, <strong>CSS5</strong> et <strong>JavaScript</strong>, 
        et explorant des frameworks populaires tels que <strong>React</strong> et <strong>Node.js</strong>.
         </em></p>
        <p><em>Ma fabuleuse expérience en tant que mère au foyer s’est enrichie du <strong>sens de l'organisation</strong>, 
        de la <strong>gestion du temps</strong> et de la <strong>résolution de problèmes</strong> 
        … atouts précieux dans le travail de développeur, où il s’agit de jongler entre les tâches, 
        de s’adapter, et de trouver des <strong>solutions créatives</strong> aux défis techniques.
         </em></p>
        <p><em>Enthousiaste à l'idée d'explorer vos idées, j'ai hâte d'imaginer avec vous un site internet qui vous ressemblera.</em></p>
        </div>}
        <p className="visible"><em>La conception de sites web interactifs et esthétiquement plaisants est un défi palpitant ; 
        PME, associations ou particuliers, je serai ravie de partager mes compétences et ma passion 
        pour le développement web en répondant à vos besoins de création de site Internet. </em></p>
      </div>    
      <button className="openTextBtn">...</button>
    </section>
  )
}
export default AboutMe;