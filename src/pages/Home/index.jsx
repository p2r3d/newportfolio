import React from 'react';
import Nav from '../../components/Nav';
import Gallery from '../../components/Gallery';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import "../../style/main.scss";
function Home() {
    return (
    <div className='homeContainer'>
      <Nav />
      <AboutMe/> 
      <Skills/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>);
}
export default Home;
