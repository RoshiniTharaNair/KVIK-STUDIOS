import React from "react";
import styles from './Home2.module.css';

const Home2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.before} style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <div className={styles.textAndArrow}>
          <span className={styles.beforeText}>Click any one of the images here</span>
          <img src="/BeforeArrow.png" alt="Arrow Left" className={styles.leftArrow} />
        </div>
        <img src="/collage-landscape7.jpg" alt="Before" className={styles.beforeImage} style={{marginTop:"1.5%",width:"50%",height:"40%"}}/>
      </div>
      <div className={styles.after} style={{display:"flex",alignItems:"center",margin:"2% 0%"}}>
        <img src="/rob1.jpg" alt="After" className={styles.afterImage} />
        {/* <img src="/after.png" alt="Arrow Left" className={styles.rightArrow} /> */}
      </div>
    </div>
  );
};

export default Home2;
