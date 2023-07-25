import React, {useState} from 'react';
import Hamburger from '../Hamburger';
import './nav.scss'

function Nav() {
  // hook useState pour créer la variable locale isOpenMenu
  const [isOpenMenu, setIsOpenMenu]=useState(false);
  // fct qui change la valeur de la variable locale selon l'ouverture ou non du menu
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <section className="navDiv">    
    {/* affichage plume + nom */}  
      <div className="logoDiv">
        <div className="logo">
          <i className="fa-solid fa-feather" width="50" height="50"></i> 
        </div>
        {/* si le menu hamburger est ouvert alors le nom est masqué */}
         {isOpenMenu ? null : (
          <div className="myName">
            <div ><em>Pascale</em></div>
            <div ><em>Développeuse Web</em></div>
          </div>
        )}
      </div>
      {/* affichage liens du menu si isOpenMenu(hamburger) est false */}
      <nav className={`navbar ${isOpenMenu ? "open" : ''}`}>
        <a href="/#" className="navLink" >Accueil</a> 
        <a href="#skills" className="navLink" >Compétences</a>
        <a href="#portfolio" className="navLink" >Portfolio</a>
        <a href="#contact" className="navLink" >Contact</a>
      </nav>
       {/* affichage du menu hamburger si isOpen est true */}
      <div className="hamburgerDiv">
        <Hamburger isOpen={isOpenMenu} toggleMenu={toggleMenu}/>
      </div>
    </section>
  )
}
export default Nav