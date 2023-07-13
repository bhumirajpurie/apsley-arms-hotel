import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.section}>
        <Navbar />
        <div className={styles.homeContent}>
          <span className={styles.welcomeText}>All are warmly welcome</span>
          <br />
          <span className={styles.hotelName}>The Apsley Arms Hotel</span>
        </div>
        <button className={styles.exploreButton}>Explore Our Menu</button>
      </div>
    </>
  );
};

export default Home;
