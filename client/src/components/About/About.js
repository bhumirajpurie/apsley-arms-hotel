import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.position}>
      <img src="/pizzas/chef.jpg" alt="chefphoto" />
      <div className={styles.Heading}>
        <h1>Our Apslay Arms</h1>
        <div className={styles.Hotel}>
          <h1>Hotel</h1>
        </div>
        <div className={styles.cheif}>
          <h1>Expert Kitchen Chef</h1>
        </div>
        <div className={styles.content}>
          <p>
            Hello everyone, welcome to our hotel. You can find everything over
            here. Enjoy your food and the summer.
          </p>
          <p>
            Hello everyone, welcome to our hotel. You can find everything over
            here. Enjoy your food and the summer.
          </p>
        </div>
      </div>
      <button className={styles.contactbtn}>Contact Us</button>
    </div>
  );
};

export default About;
