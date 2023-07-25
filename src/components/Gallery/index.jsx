import React,{useState} from 'react';
import "./gallery.scss";
import Card from "../Card";
import Modale from "../Modale";
import Projects from "../../datas/projects.json";

function Gallery() {
  // ensemble des données des projets
  const [projectState] = useState(Projects);
  // projet sélectionné qd carte cliquée
  const [selectedProject, setSelectedProject] = useState(null);
  // état de la modale, ouverte ou fermée
  const [modalOpen, setModalOpen] = useState(false);

  // gère le clic sur une carte et passe le projet argument
  // modalOpen true ouvre la modale avec le projet détaillé
  const handleCardClick = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };
  // gère la fermeture de la modale + aucun projet n'est sélectionné
  //  modalOpen false ferme la modale
  const handleCloseModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
  <section id="portfolio" className="galleryDiv">
    <div>
      <h2>Portfolio</h2>
    </div>
    <div className="cardsDiv">
    {/*itération sur chaque projet du tableau projectState.projects qui sera rendu avec le comosant Card */}
      {projectState.projects.map((project) => (
        <Card
          key={project.id}
          project={project}
          onOpenModal={() => handleCardClick(project)}
        />
      ))}
      <div className='modalDiv'>
      {/*si modalOpen vrai composant Modale rendu avec le projet en prop et la fonction qui gère la fermeture de la modale*/}
      {modalOpen && (
        <Modale project={selectedProject} onCloseModal={handleCloseModal} />
      )}
      </div>
    </div>
  </section>
  );
}

export default Gallery;