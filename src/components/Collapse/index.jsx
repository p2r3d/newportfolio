import React,{useState} from "react";
import "./collapse.scss"

function Collapse({title,description }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleCollapse = () => {
    setIsOpened((opened) => !opened);
  };

  return (
    <div className="collapseDiv">
      <h3 onClick={toggleCollapse}>{title}</h3>
      {isOpened && (
        <ul>
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collapse;
