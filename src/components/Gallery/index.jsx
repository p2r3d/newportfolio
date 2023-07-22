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

  // carte cliquée
  const handleCardClick = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };
// modale fermée
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
      {projectState.projects.map((project) => (
        <Card
          key={project.id}
          project={project}
          onOpenModal={() => handleCardClick(project)}
        />
      ))}
      <div className='modalDiv'>
      {modalOpen && (
        <Modale project={selectedProject} onCloseModal={handleCloseModal} />
      )}
      </div>
    </div>
  </section>
  );
}

export default Gallery;