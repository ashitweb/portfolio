import React, { useState, useEffect } from "react";
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Header() {
  const [color, setColor] = useState({ backgroundColor: 'transparent' });

  function changeColor() {
    setColor({ backgroundColor: window.scrollY >= 110 ? 'var(--bg-color-darker)' : 'transparent' });
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <>
      <header style={color} className="pcheader">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div>
          <h2>Ashit.</h2>
        </div>
      </header>
     
    </>
  );
}

export default Header;
