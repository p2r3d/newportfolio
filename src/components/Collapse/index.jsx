import React,{useState} from "react";
import "./collapse.scss"

function Collapse({title,description,image }) {
  // hook useState qui crée la variable locale d'état setIsOpened, collapse fermé par défaut
  const [isOpened, setIsOpened] = useState(false);

  // fonction appelée par l'événement onClick
  const toggleCollapse = () => {
    setIsOpened((opened) => !opened);
  };

  return (
    <div className="collapseDiv" onClick={toggleCollapse}>
      <i className={image}></i>
      {/*affichage de la compétence */}
      <h3>{title}</h3>
      {/*si isOpened alors collapse ouvert */}
      {isOpened && (
        <div className={`descriptionDiv ${isOpened ? "visible" : ""}`}>
          {description.map((desc, index) => (
            <p key={index} className="detailsContainer">
              {/*affichage du titre  */}
              <span className="titleDesc">{desc.split(":")[0]}</span> 
              {/*affichage du contenu */}
              <span className="contentDesc">{desc.split(":")[1]}</span>
            </p>
          ))}
        </div>
       )}
    </div>
  );
};

export default Collapse;
