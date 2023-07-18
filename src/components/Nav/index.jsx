import React from 'react';
import './nav.scss'

function Nav() {
  return (
    <section className="navDiv">      
      <div className='logoDiv'>
        <a href="#" className='logo' >
        <i className="fa-solid fa-feather" width="50" height="50"></i>
          {/*<img  src={require("../../assets/logo/world.PNG")}  alt="logo" width="50" height="50"/>*/}
        </a>
      </div>
      <nav className='navbar'>
        <a href="#" className="navLink" >Accueil</a>
        <a href="#portfolio" className="navLink" >Portfolio</a>
        <a href="#skills" className="navLink" >Compétences</a>
        <a href="#contact" className="navLink" >Contact</a>
      </nav>
    </section>
  )
}
export default Nav