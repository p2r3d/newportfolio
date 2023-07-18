import React,{useState} from 'react';
import "./gallery.scss";
import Card from "../Card";
import Modale from "../Modale";
import Projects from "../../datas/projects.json";

function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [projectState] = useState(Projects);

  const handleCardClick = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };

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
        {modalOpen && (
          <Modale project={selectedProject} onCloseModal={handleCloseModal} />
        )}
    </div>
  </section>
  );
}

export default Gallery;