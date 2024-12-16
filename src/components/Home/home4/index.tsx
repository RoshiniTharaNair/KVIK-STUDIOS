"use client";
// src/pages/index.tsx
import React, { useRef } from 'react';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

// Import CSS modules or global CSS
import styles from './Home4.module.css';

// Animation variants for fading in elements
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

const Home4: React.FC = () => {
  const targetSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClick = () => {
   router.push('/about-me');
   window.scrollTo({
     top: targetSectionRef.current?.offsetTop || 0,
     behavior: 'smooth'
   });
  };

  return (
    <>
     <Container className={styles.goalMain} >
      <h1 className={styles.goalh1}>Getting Started</h1>
      <Container className={styles.goalh2container}  >
        <h1 className={styles.goalh2}>
          Ready to take your business to the next level? Contact us today to schedule a consultation and learn more about how we can help you achieve your goals.
        </h1>
      </Container>
        <Container className={styles.goalavatarcontainer} >
      {/* <Row className={styles.goalrow}> */}

      <Col className={styles.goalcol} lg={2} sm={12}>
          <Avatar className={styles.goalavatar1}>1.</Avatar> {/* Use the MUI Avatar component */}
         <p className={styles.goalp}> Why Choose US</p>
         
        </Col>
        
        <Col className={styles.goalcol} lg={2} sm={12}>
          <Avatar className={styles.goalavatar2} >2.</Avatar> {/* Use the MUI Avatar component */}
          <p className={styles.goalp}> Our Process</p>
          
        </Col>
        <Col className={styles.goalcol3} lg={2} sm={12} >
          <Avatar className={styles.goalavatar3}>3.</Avatar> {/* Use the MUI Avatar component */}
          <p className={styles.goalp3}> Frequently Asked Questions</p>
          
        </Col>
        <Col className={styles.goalcol} lg={2} sm={12}>
          <Avatar className={styles.goalavatar4}>4.</Avatar> {/* Use the MUI Avatar component */}
         
          <p className={styles.goalp}> Testimonials</p>
         
        </Col>
        <Col className={styles.goalcol5} lg={2} sm={12} >
          <Avatar className={styles.goalavatar5}>5.</Avatar> {/* Use the MUI Avatar component */}
         
          <p className={styles.goalp}> Contact Us</p>
         
        </Col>
      {/* </Row> */}
      </Container>
        <p className={styles.goalpr}>
          <Link href="/#gettingstarted">
            More Resources
          </Link>
        </p>
        {/* More content */}
      </Container>
    </>
  );
};

export default Home4;
