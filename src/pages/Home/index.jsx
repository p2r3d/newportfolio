import React from 'react';
import Nav from '../../components/Nav';
import Gallery from '../../components/Gallery';
//import Gallery0 from '../../components/Gallery0';
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
      {/*<Gallery0/>*/}
      <Skills/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>);
}


export default Home;
