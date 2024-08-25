import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";
import 'react-circular-progressbar/dist/styles.css';

function About() {
  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3, // Adds a stagger effect to children
},
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeRightAnimation = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0,
      transition: { duration: 0.5,
        staggerChildren: 0.3, // Adds stagger effect to children
      },
    },
  };

  const childVariantsRight = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <section className="about" id="about">
        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 variants={childVariants}>About Me</motion.h2>

          <motion.p variants={childVariants}>
            I’m a Frontend Web Designer from Delhi. Skilled in HTML, CSS,
            JavaScript, and React, I create seamless responsive websites. With 5 years in digital marketing, I specialize in SEO, Meta Ads, and Google Ads.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills"
          variants={fadeRightAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div style={{ width: 150 }} variants={childVariantsRight} className="skillsdiv">
            <CircularProgressbar
              value={90}
              text={`${90}%`}
              styles={buildStyles({
                textColor: "var(--text-color)",
                pathColor: "var(--main-color)",
                strokeLinecap: "round",
                strokeWidth: 8, // Adjusted stroke width
                trailColor: "#d6d6d6",
                textSize: "14px",
              })}
            />
            <h4>HTML</h4>
          </motion.div>

          <motion.div style={{ width: 150 }} variants={childVariantsRight} className="skillsdiv">
            <CircularProgressbar
              value={85}
              text={`${85}%`}
              styles={buildStyles({
                textColor: "var(--text-color)",
                pathColor: "var(--main-color)",
                strokeLinecap: "round",
                strokeWidth: 8, // Adjusted stroke width
                trailColor: "#d6d6d6",
                textSize: "14px",
              })}
            />
            <h4>CSS</h4>
          </motion.div>

          <motion.div style={{ width: 150 }} variants={childVariantsRight} className="skillsdiv">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              styles={buildStyles({
                textColor: "var(--text-color)",
                pathColor: "var(--main-color)",
                strokeLinecap: "round",
                strokeWidth: 8, // Adjusted stroke width
                trailColor: "#d6d6d6",
                textSize: "14px",
              })}
            />
            <h4>JavaScript</h4>
          </motion.div>

          <motion.div style={{ width: 150 }} variants={childVariantsRight} className="skillsdiv">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              styles={buildStyles({
                textColor: "var(--text-color)",
                pathColor: "var(--main-color)",
                strokeLinecap: "round",
                strokeWidth: 8, // Adjusted stroke width
                trailColor: "#d6d6d6",
                textSize: "14px",
              })}
            />
            <h4>React</h4>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
