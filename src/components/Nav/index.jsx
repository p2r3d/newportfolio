import React, {useState} from 'react';
import Hamburger from '../Hamburger';
import './nav.scss'

function Nav() {
  const [isOpenMenu, setIsOpenMenu]=useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <section className="navDiv">      
      <div className="logoDiv">
        <div className="logo">
          <i className="fa-solid fa-feather" width="50" height="50"></i> 
        </div>
         {isOpenMenu ? null : (
          <div className="myName">
            <div ><em>Pascale</em></div>
            <div ><em>Développeuse Web</em></div>
          </div>
        )}
      </div>
      <nav className={`navbar ${isOpenMenu ? "open" : ''}`}>
        <a href="/#" className="navLink" >Accueil</a> 
        <a href="#skills" className="navLink" >Compétences</a>
        <a href="#portfolio" className="navLink" >Portfolio</a>
        <a href="#contact" className="navLink" >Contact</a>
      </nav>
      <div className="hamburgerDiv">
        <Hamburger isOpen={isOpenMenu} toggleMenu={toggleMenu}/>
      </div>
    </section>
  )
}
export default Nav