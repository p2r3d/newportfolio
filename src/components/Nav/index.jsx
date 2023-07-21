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
      <div className='logoDiv'>
        <a href="/#" className='logo' >
        <i className="fa-solid fa-feather" width="50" height="50"></i>
        </a>
      </div>

      <nav className={`navbar ${isOpenMenu ? 'open' : ''}`}>
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