import React from "react";
import "./modale.scss";
import Slideshow from "../Slideshow";
import { useState } from "react";
// import des données à afficher dans la modale
import Technos from "../../datas/technologies.json";

function Modale({ project, onCloseModal }) {
  //gère la fermeture de la modale 
  const handleCloseClick = () => { onCloseModal(); };
  // hook useState renvoie un tableau avec la valeur initiale du fichier technologies
  const [technoState] = useState(Technos);
  // recherche du fichier dont l'identifiant est celui du projet passé en props
  const technologies = project.technos.map((technoId) =>
    technoState.technologies.find((tech) => tech.id === technoId)
  );
    // Etat local pour l'affichage du diaporama
  const [showSlideshow, setShowSlideshow] = useState(false);

  // Diaporama lancé au clic sur une image
  const handleImageClick = () => {
    setShowSlideshow(true);
  };
  return (
    <div key={project.id} className="modal">
      <div className="modalContent">
        <div className="intro">
          <button onClick={handleCloseClick} className="modalCloseBtn" >X</button>
          <h2 className="modalTitle">{project.title}</h2>
          <div className="modalDescription">{project.description}</div>
          <div className="modalDescription"><em>{project.projectDetails.origin}</em></div>
        </div>
        <div className="contentDetails">
        {/* Affichage des détails du projet*/}
        {project.projectDetails && (
          <div  className="left"> 
            <p>Mission</p>
            <span className="">{project.projectDetails.mission}</span>
            <p>Problématiques</p>
            <div>
              <ul>
              {/*extraction des valeurs des propriétés de l'objet problematiques 
              puis itération sur chaque élément  */}
                {Object.values(project.projectDetails.problematiques).map((problematique, index) => (
                  <li key={index}>{problematique}</li>
                ))}
              </ul>
            </div>
            <p>Solutions</p>
            <div>
              <ul>
              {/*extraction des valeurs des propriétés de l'objet solutions 
              puis itération sur chaque élément  */}                {Object.values(project.projectDetails.solutions).map((solutions, index) => (
                  <li key={index}>{solutions}</li>
                ))}
              </ul>
            </div>
            <p>Compétences</p>
            <div>
              <ul>
              {/*extraction des valeurs des propriétés de l'objet competences 
              puis itération sur chaque élément  */}                
              {Object.values(project.projectDetails.competences).map((competences, index) => (
                <li key={index}>{competences}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Affichage colonne de droite*/}
          <div className="right">        
            <div className="cardTechnologiesDiv"> 
              <p>Technologies</p>  
              <div className="technologies">        
              {technologies.map((technology) => (
              <div key={technology.id}>
                <img
                 className="technology"
                src={require(`../../assets/technoImages/${technology.picture}`)}
                alt="Technologies"
                width="50"
                height="50"
                title={technology.title}
                />
              </div>
              ))}
              </div> 
            </div>
             {/* Affichage des liens vers github ou vers le site*/} 
            <div>
            {project.code && (
              <div className="linksDiv">
                <p>Github</p>  
                {project.site && (<p>Site Web</p>)}
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                <img 
                className="cardGHCode"
                  src={require("../../assets/technoImages/github.webp")} 
                  alt={`Lien vers le code Github de ${project.title}`} 
                  width="50" height="50" 
                title={`Lien vers le code Github de ${project.title}`}
                />
                </a>
                {project.site && (
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                  <img 
                  className="cardCode"
                  src={require(`../../assets/projectImages/${project.picture}`)} 
                  alt={`Lien vers le site web de ${project.title}`} 
                  width="70" height="30" 
                  title={`Lien vers le site web de ${project.title}`}
                  />
                </a>
                )}
              </div>
             )}
            </div>
            {/* Affichage des présentations*/}     
            {project.pictures && (          
            <div className="detailImg">
            <p onClick={handleImageClick}>Présentation</p>
              <ul>
              {/*itération sur les images mini de la présentation du projet  */}
              {project.pictures.map((picture, index) => (
                <li key={index}>
                  <img src={require(`../../assets/projectImages/${picture}`)} 
                  className="" 
                  alt=""
                  width="200" 
                  onClick={handleImageClick}
                  />
                </li>
              ))}
                </ul>
            </div> 
            )}
          </div>
        </div>   
        {/* Affichage du diaporama selon état local*/} 
        {showSlideshow && <Slideshow selHousing={project} onCloseDiaporama={() => setShowSlideshow(false)} />}
      </div>            
    </div>
  );
}
export default Modale;
