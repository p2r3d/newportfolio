import React from 'react';
import "./card.scss";

function Card({ project, onOpenModal }) {
  // carte cliquée: ouverture de la modale avec le projet sélectionné en argument
  const handleCardClick = () => {
    onOpenModal(project);
  };
  return (
    <div className="card" onClick={handleCardClick}>
    {/* carte du projet avec son image, son titre, sa description*/}
      <img 
        src={require(`../../assets/projectImages/${project.picture}`)}
        alt={project.title} 
        className="cardImg"/>
      <h3 className="cardTitle">{project.title}</h3>
      <p className="cardDescription">{project.description}</p>
      {/* bouton "+" avec opacité au survol*/}
      <div className="overlayDiv">
        <span className="plusDiv">
          <i className="fa-solid fa-circle-plus" title="Plus d'infos"></i>
        </span>
      </div>
    </div>
  );
};

export default Card;
