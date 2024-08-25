import React from "react";
import { motion } from "framer-motion";


function Contact(){

    
    const fadeInAnimation = {
        hidden: {opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
        transition: {duration: 0.5, staggerChildren: 0.3 },
       
    } 
    
    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 1 } },
      };

    return(
        <>
        <section className="contact" id="contact">
            <motion.div
            variants={fadeInAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}>

        <motion.h2
        variants={childVariants}>
            Connect With Me </motion.h2>

            <motion.p variants={childVariants}>
            I am available for freelance work. Connect with me via phone: 
            +91 9958027149 or email: ashitweb@gmail.com
            </motion.p>

            <motion.form
   variants={childVariants}
      className="form-container"
    >
      <input placeholder="Name" type="text" className="form-input" />
      <input placeholder="Email" type="email" className="form-input" />
      <input placeholder="Phone" type="number" className="form-input" />
      <textarea placeholder="Message" className="form-textarea"></textarea>
      <motion.button
       variants={childVariants}
        className="form-button"
      >
        Submit
      </motion.button>
    </motion.form>


        </motion.div>
        </section>
        </>
    )
}

export default Contact;