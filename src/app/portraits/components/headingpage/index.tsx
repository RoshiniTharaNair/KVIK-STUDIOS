// src/pages/index.tsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from '../Home.module.css'; // Replace './Hero.css' with a CSS module


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const HeadingPage: React.FC = () => {
  return (
    <div className={styles.flexContainer} >
    <div className={styles.approachCol}>
      <h1 className={styles.approachH2}>Portraits</h1>
      <p className={styles.approachP}>
        Kalamkari is a traditional Indian textile art form that involves hand-painting or block-printing designs onto fabric...
      </p>
    </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center",paddingTop:"5%" }}>
          <div >
            <img src='/Yarn Died1cropped (1).jpg' alt="Kalamkari Fabric" style={{width:"70vw",height:"auto"}} />
          </div>
        </div>
        <div style={{display: "flex", paddingTop:"1%",justifyContent:"center"}}>
        <Container className={styles.imgContainer} >
        <div className={styles.imgDiv1} style={{ }}>
        <img className={styles.img1} src='/Knitted 1.png' alt="Kalamkari Fabric"  />
        </div>
        <div className={styles.imgDiv2} >
        <img className={styles.img2} src='/Kalamkari 2.png' alt="Kalamkari Fabric"  />
        </div>
      </Container>
      </div>
      <div style={{display: "flex", paddingTop:"1%",justifyContent:"center"}}>
      <Container className={styles.imgContainer} >
        <div className={styles.imgDiv3} >
        <img className={styles.img3} src='/lean-black-dress.png' alt="Kalamkari Fabric"/>
        </div>
        <div className={styles.imgDiv4}>
        <img className={styles.img4} src='/Kalamkari 4.png' alt="Kalamkari Fabric"  />
        </div>
      </Container>
      </div>
      
        {/* Other Containers and Rows follow similar patterns, use Next.js Image component as shown above */}
    </div>
  );
};

export default HeadingPage;
