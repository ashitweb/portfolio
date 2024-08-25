import React from "react";
import img4 from "../images/customweb.png";
import img5 from "../images/icons8-html-100.png";
import img6 from "../images/reactlogo.png";
import img7 from "../images/seo.png";
import img8 from "../images/meta.png";
import img9 from "../images/gads.png";
import { motion } from "framer-motion";





function Services(){

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
<section className="services" id="services">

<motion.div className="servicesdiv"
variants={fadeInAnimation}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.1 }}

>
<motion.h2
   variants={childVariants}
    
    >
      My Awesome Services
    </motion.h2>



<motion.p className="servicepara"

variants={childVariants}
>Obviously I'm a Web Designer. Digital Marketer with over 5 years of experience. 
    Experienced with all stages of the development and marketing.</motion.p>

</motion.div>


<motion.div class="container" 
variants={fadeInAnimation}
initial="hidden"
whileInView="show"
viewport={{ once: true, amount: 0.1 }}
>
  
<motion.div class="card" 
     variants={childVariants}
    >
        <div className="cardimg">
        <img src={img4} alt="Custom Website Design Icon"/></div>
        <h3>Custom Website Design</h3>
        <p>Tailored designs that reflect your brand and engage users across devices.</p>
        </motion.div>

   
        <motion.div class="card"  variants={childVariants}>
        <div className="cardimg">
        <img src={img5} alt="Responsive Web Design Icon"/></div>
        <h3>HTML & CSS Web Design</h3>
        <p>Responsive HTML & CSS sites ensuring consistent branding and user experience on all screens.</p>
        </motion.div>

  
        <motion.div class="card"  variants={childVariants}>
        <div className="cardimg">
        <img src={img6} alt="React JS Development Icon"/></div>
        <h3>React JS Development</h3>
        <p>Interactive web applications built with ReactJS for scalable, user-friendly interfaces.</p>
        </motion.div>


        <motion.div class="card"  variants={childVariants}>
        <div className="cardimg">
        <img src={img7} alt="SEO Icon"/></div>
        <h3>Search Engine Optimization</h3>
        <p>Boost visibility and organic traffic with targeted keyword strategies.</p>
        </motion.div>


        <motion.div class="card"  variants={childVariants}>
        <div className="cardimg">
        <img src={img8} alt="Meta Ads Icon"/></div>
        <h3>Meta Ads (Facebook/Instagram)</h3>
        <p>Manage targeted ads to increase brand awareness and drive engagement.</p>
        </motion.div>

  
        <motion.div class="card"  variants={childVariants}>
        <div className="cardimg">
        <img src={img9} alt="Google Ads Management Icon"/></div>
        <h3>Google Ads Management</h3>
        <p>Optimize Google Ads campaigns for maximum ROI and effective customer reach.</p>
        </motion.div>
    
</motion.div>
</section>
</>
)

}

export default Services;