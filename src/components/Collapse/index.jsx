import React,{useState} from "react";
import "./collapse.scss"

function Collapse({title,description,image }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleCollapse = () => {
    setIsOpened((opened) => !opened);
  };

  return (
    <div className="collapseDiv" onClick={toggleCollapse}>
      <i className={image}></i>
      <h3>{title}</h3>
      {isOpened && (
        <div className={`descriptionDiv ${isOpened ? "visible" : ""}`}>
          {description.map((desc, index) => (
            <p key={index} className="detailsContainer">
              <span className="titleDesc">{desc.split(":")[0]}</span> 
              <span className="contentDesc">{desc.split(":")[1]}</span>
            </p>
          ))}
        </div>
       )}
    </div>
  );
};

export default Collapse;
