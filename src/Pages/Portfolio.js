import React from "react";
import { motion } from "framer-motion";
import img1 from "../images/temperatureJS.png";
import img2 from "../images/JS Checked.png";
import img3 from "../images/JS Counter.png";
import img4 from "../images/geekfolio.png";
import img5 from "../images/tgcrevamp.png";
import img6 from "../images/nextgreen.png";




function Portfolio() {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.5, staggerChildren: 0.3 },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeRightAnimation = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0,
      transition: { duration: 0.5,
        staggerChildren: 0.5, // Adds stagger effect to children
      },
    },
  };

  const childVariantsRight = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1} },
  };

  const projects = [
    { title: "Project 1", image: img1, previewUrl: "#", linkUrl: "https://ashitweb.github.io/JS-temperature-program/" },
    { title: "Project 2", image: img2, previewUrl: "#", linkUrl: "https://ashitweb.github.io/JS-payment-selector/" },
    { title: "Project 3", image: img3, previewUrl: "#", linkUrl: "https://ashitweb.github.io/JS-count-program/" },
    { title: "Project 4", image: img4, previewUrl: "#", linkUrl: "https://ashitweb.github.io/geekfolio/" },
    { title: "Project 5", image: img5, previewUrl: "#", linkUrl: "https://ashitweb.github.io/TGC-Revamp/" },
    { title: "Project 6", image: img6, previewUrl: "#", linkUrl: "https://ashitweb.github.io/nextgreen/" },
  ];

  return (
    <>
      <section className="portfolio" id="portfolio">
        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={childVariants}>Portfolio</motion.h2>
        </motion.div>

        <motion.div
          className="project-container"
          variants={fadeRightAnimation}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="project-card" variants={childVariantsRight}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="overlay">
                <h4>{project.title}</h4>
               
                <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Portfolio;
