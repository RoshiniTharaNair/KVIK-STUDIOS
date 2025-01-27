import React, { CSSProperties } from 'react';
import '../Careers.css';

const HeadingPage = () => {
  // Define the background style with the image using CSSProperties
  const backgroundStyle: CSSProperties = {
    height: '60vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:"80px",
    background:"#081525"
    // backgroundImage: `linear-gradient(top center,#3e0273 30%,#260a38 15%,#08040d 50% )`
    // background: `radial-gradient(circle at top center, #260a38 10%, #08040d 90%)`
    // background: `radial-gradient(circle at center, #170a1f, #34114a)` // Replace with your actual color values
  };

  // Define the style for the top left corner text
  const topLeftTextStyle: CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '35px',
    padding: '1rem',
    fontFamily: "Avenir Next LT W02 Regular",
    textTransform: 'uppercase',
    fontSize: '10px',
    fontWeight: '600',
    letterSpacing: "0.18em"
  };

  // Define the style for the "HOME >" text
  const homeStyle: CSSProperties = {
    // color: 'rgba(0,0,0,0.4)'
    color: 'rgba(253,253,253,0.4)'
  };

  // Define the style for the "PAYMENT AND DELIVERY" text
  const paymentDeliveryStyle: CSSProperties = {
    // color: 'rgba(0,0,0,0.8)',
    color: 'rgba(255,255,255)',
    paddingLeft:"8px"
  };

  return (
<div className="careers-div-style">
      {/* Text in top left corner */}
      <div style={topLeftTextStyle}>
        <span style={homeStyle}>HOME {'>'}</span>
        <span style={paymentDeliveryStyle}> CAREERS</span>
      </div>
      
      {/* Background and Warranty Info with background image */}
      <div className="text-center" style={backgroundStyle}>
        <h1 className="mb-4 careers-heading" style={{ fontFamily: "Times New Roman,serif", fontStyle: "italic", fontWeight: 500, color: "white", textTransform: "uppercase" }}>
          Careers
        </h1>
      </div>
    </div>
  );
};

export default HeadingPage;
