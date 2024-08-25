import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


function MobHeader() {
  const [color, setColor] = useState({ backgroundColor: 'transparent' });
  const[clas, setClas] = useState({className: "mobnav"});

  function changeColor() {
    setColor({ backgroundColor: window.scrollY >= 110 ? 'var(--bg-color-darker)' : 'transparent' });
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);



  function togglemenu() {
    setClas((prevState) => ({
      className: prevState.className === "mobnav" ? "mobnavplau" : "mobnav"
    }));
  }

  return (
    <>
      <header style={color} className="mobheader">
      <div>
          <h2>Ashit.</h2>
        </div> 

      

          <nav className={clas.className}>
            <ul>
          
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div onClick={togglemenu}>
          <FontAwesomeIcon icon={faBars} />

        
</div>
       
      </header>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default MobHeader;
