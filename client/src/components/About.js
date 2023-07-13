import React from "react";
import styles from "./About.module.css";
export const About = () => {
  return (
    <div className={styles.position}>
   
    <img src="/pizzas/chef.jpg" alt="chefphoto" />
  <div className={styles.Heading}>
    <h1>Our Apslay Arms</h1>

    <div className={styles.Hotel}>
      <h1>Hotel</h1>    </div>
      
     
      <div className={styles.cheif}>
        <h1> Expert kitchen Chef</h1>
      </div>

      <div className={styles.content}>
      <p>A chef is a professional cook and tradesman who is proficient in all aspects 
      of food preparation, often focusing on a particular
       cuisine. The word "chef" is derived from the term chef de cuisine (French pronunciation: [ʃɛf də kɥizin]), the director or head of a kitchen. Chefs can receive formal training from an institution, as well as by apprenticing with an experienced chef.</p>
        
      </div>

    
       

    </div>
    </div>
   
)};
