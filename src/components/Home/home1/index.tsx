// Import the required module for React and the CSS module for styling
import React from "react";
import styles from './Hero.module.css'; // Replace './Hero.css' with a CSS module

// Create the Hero component
const Hero = () => {
  return (
    <div className={styles.hero}>
        <div >
        <h1 className={`${styles.title} ${styles.textGradient}`}>KVIK Studios</h1>
        <p className={`${styles.subtitle} ${styles.textGradient}`}>EXQUISITE PORTRAITS</p>
        <p className={`${styles.paragraph} ${styles.textGradient}`}>- CRAFTED BY AI -</p>
   

        </div>
      
    </div>
  );
};

// Export the Hero component
export default Hero;
