import React from 'react';
import "./card.scss";

function Card({ project, onOpenModal }) {
  // carte cliquée: ouverture de la mosale avec le projet sélectionné
  const handleCardClick = () => {
    onOpenModal(project);
  };
  return (
    <div
      className=""
      onClick={handleCardClick}>
      <div className="card">
        <img 
          src={require(`../../assets/projectImages/${project.picture}`)}
          alt={project.title} 
          className="cardImg"/>
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>
        <div className="overlayDiv">
          <span className="plusDiv">
            <i className="fa-solid fa-circle-plus" title="Plus d'infos"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
