"use client";

import React, { useEffect } from 'react';
import styles from './Home3.module.css'; // Assuming you have a CSS module for the component


export default function Home3() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const carouselItems = [
    {
      id: 1,
      content: (
        <div style={{ 
            width: "100%", 
            background: "transparent", 
            border: "none", 
            boxShadow: "none", 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center',
            paddingTop:"5%",
            paddingBottom:"10%"
          }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            className={styles.carouselH1}
            style={{
              lineHeight: "1.5em",
              display: "flex",
              textAlign: "center",
              fontWeight: 500,
              fontFamily: "Futura LT W01 Medium, sans-serif",
              fontStyle: "normal",
            }}
          >
            <img alt="..." src="/yellow_quotes.png" className={styles.leftImg} style={{ width: "6%", height: "100%" }} />
            <span style={{ flex: 1 }}>
              Working with Vikram was a great experience. Their team was responsive and professional, and the end result exceeded our expectations. I would highly recommend them to anyone looking for creative services.
            </span>
            <img alt="..." src="/yellow_quotes1.png" className={styles.rightImg} style={{ width: "6%", height: "100%"}} />
          </h1>
          <h4
            style={{
              letterSpacing: "0.3px",
              textAlign: "center",
              fontWeight: 300,
              paddingTop:"2%",
              fontFamily: "Futura LT W01 Medium, sans-serif",
            }}
            className={styles.carouselH4}
          >
            Emily .S. Marketing Director, ABC Corp.
          </h4>
        </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div  style={{ paddingTop:"5%",
        paddingBottom:"12%",width:"100%", background:"transparent", border:"none",boxShadow:"none", display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        >
        <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
          <h1
            className={styles.carouselH1}
            style={{
              lineHeight: "1.5em",
              display: "flex",
              textAlign: "center",
              fontWeight: 500,
              fontFamily: "Futura LT W01 Medium, sans-serif",
              fontStyle: "normal",
            }}
          >
            <img alt="..." src="/yellow_quotes.png" className={styles.leftImg} style={{ width: "6%", height: "100%" }} />
            <span style={{ flex: 1 }}>
              Vikram&apos;s team worked closely with us to create our product that truly reflected our brand and message. Their attention to detail and creative approach made all the difference.
            </span>
            <img alt="..." src="/yellow_quotes1.png" className={styles.rightImg} style={{ width: "6%", height: "100%"}} />
          </h1>
          <h4
            className={styles.carouselH4}
            style={{
              letterSpacing: "0.3px",
              textAlign: "center",
              fontWeight: 300,
              paddingTop:"2%",
              fontFamily: "Futura LT W01 Medium, sans-serif",
            }}
          >
            Ian Peddle, Director, ABM Solutions
          </h4>
        </div>
        </div>
      ),
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Changes every 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <div id='testimonials' style={{maxWidth:"100%", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#081525",color:"#c9a25b" }}>
        <h1 className={styles.testimonial} style={{ fontWeight: 600,paddingTop:"4%",fontFamily: "Futura LT W01 Medium, sans-serif" }}>Testimonials</h1>
      <div>{carouselItems[activeIndex].content}</div>
      {/* <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button> */}
    </div>
  );
}
