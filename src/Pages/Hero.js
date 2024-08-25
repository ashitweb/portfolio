import React from "react";
import img1 from "../images/Ashit.png";
import img2 from "../images/logo192.png";
import img3 from "../images/js.png";
import { useState, useEffect } from "react";


import { useTypewriter, Cursor } from 'react-simple-typewriter';


import '../App.css';



function Hero(){
    const [isDarkMode, setDarkMode] = useState(false);
    const [text] = useTypewriter({
        words: ['Web Designer', 'Digital Marketer', 'Web Designer'],
        loop: true, // Adjust according to your needs
        typeSpeed: 120,
        deleteSpeed: 80
    });

    function toggleTheme() {
        const body = document.querySelector("body");
    
        if (isDarkMode) {
          body.setAttribute("data-theme", "dark");
        } else {
          body.setAttribute("data-theme", "light");
        }
    
        // Toggle the dark mode state
        setDarkMode(!isDarkMode);
      }
    

    return (

        <section className="hero" >
                
            <img className="reactimg" src={img2} height="50px" alt="react" />
            <h1>Ashit Sharma</h1>
            <p style={{fontSize: '22px', color: '#ffffff' }}>I'm <span style={{ fontWeight: 'bold', color: 'var(--main-color)' }}>{text}</span>
                <span>
                    <Cursor />
                </span>
            </p>
            <div className="nav">
          <button onClick={toggleTheme} className="togglebtn">
            {isDarkMode ? '🔆' : '🌙'}
          </button></div>
             <button>
    <a 
        href="https://cal.com/marketing-boutique/30min" 
        target="_blank" 
        style={{ 
            textDecoration: 'none', 
            color: 'var(--white-color)' 
        }}
    >
        Book A Call With Me
    </a>
</button>
          <p>  A skilled Web Designer 
proficient in HTML, CSS, JavaScript, Bootstrap, and React,  <img className="reactimg" src={img2} height="30px" alt="react" /> focused on creating responsive and visually appealing user interfaces.
</p>

       
       <div className="imagebox">
       <img className="jsimg" src={img3} height="30px" alt="js" />
       <img src={img1} height="300px" alt="Ashit Sharma" /></div>
       </section>
        
    );




}

export default Hero;
