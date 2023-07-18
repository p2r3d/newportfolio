
import "./card.scss";
import { useState  } from "react";
import PropTypes from "prop-types";
import Slideshow from "../Slideshow";
import Projects from "../../datas/projects.json";
import Technos from "../../datas/technologies.json";
import React from 'react';

function Card0() {
  const [projectState] = useState(Projects);
  const [technoState] = useState(Technos);
 
  return (
    <div className="cardContainer">
      {projectState.projects.map((project) => {
        const technologies = project.technos.map((technoId) =>
          technoState.technologies.find((tech) => tech.id === technoId)
        );
        return (
        <div className="card" key={project.id}>
          <div className="left">
            <img
              className="cardImg"
              src={require(`../../assets/projectImages/${project.picture}`)}
              alt="Projets"
              width="540"
              height="240"
            />    
            
          </div>
          <div className="middle" >
            <div className="cardTitle">{project.title}</div>
              <div className="cardDescription">{project.description}</div>
              <div className="cardtechnologies">
              {technologies.map((technology) => (
                <div key={technology.id}>
                  <img
                    className="cardtechnology"
                    src={require(`../../assets/technoImages/${technology.picture}`)}
                    alt="Technologies"
                    width="30"
                    height="30"
                    title={technology.title}
                  />
                </div>      
              ))}
              </div>
              <div className="linksDiv">
                {project.code && (
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/technoImages/github.webp")} alt="Lien GitHub" width="30" height="30" title="Vers le code source"/>
                </a>
                )}
                {project.site && (
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <img src={require("../../assets/projectImages/booki_ico.PNG")} alt="Lien vers le site web" width="70" height="30" title="Vers le site web"/>
                </a>
                )}
              </div>
            </div>   

          <div className="right" > 
            <div className="SlideshowContainer">
              <Slideshow selHousing={project} />   
            </div>
            <i className="fa-solid fa-magnifying-glass-plus"></i>          
          </div>
        </div>
       
        );
      })}
    </div>
  );
}

Card0.propTypes = {
  title: PropTypes.string,
};

Card0.defaultProps = {
  title: "",
};

export default Card0;
