"use client";

import React, { CSSProperties, useState, useEffect } from 'react'; // Import CSSProperties
import Link from 'next/link';
import styles from './Nav.module.css';
import NavbarShort from '../NavbarShort';

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set the initial value based on the window size
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const divStyle: CSSProperties = { // Declare the divStyle as CSSProperties type
      background: "#0f1321",
      padding: "1% 0%",
      ...(isMobile ? {
          position: "fixed",
          top: 0,
          left: 0, // Use left instead of insetX
          right: 0, // Use right to ensure full width
          zIndex: 50 // zIndex can be a number
      } : {})
  };


  return (
      <div className={isMobile ? "group" : ""} style={divStyle}>
                <header className="relative h-16 px-8 mx-auto duration-200">
                {isMobile ? (
                    // Render the NavbarShort component when on mobile
                    <NavbarShort />
                ) : (
                    // Render the full navbar when not on mobile
                    <nav className="flex items-center justify-between w-full h-full">
                        <div className="flex items-center" style={{ flex: "0 0 35%", gap: "20px" }}>
                            <img src="/trans_logo.png" alt="KVIK Studios" style={{ width: "9%" }} />
                            <h1 className={styles.navItem} style={{ fontSize: "19px", fontWeight: 700 }}>KViK Studios</h1>
                            <span className={styles.navItem}>|</span>
                            <span className={styles.navItem}>Exquisite Portraits</span>
                        </div>

                        <div className="flex items-center gap-x-6 h-full" style={{ flex: "0 0 65%", justifyContent: "end" }}>
                            <Link href="/" className={`${styles.navItem} ${styles.navText}`}>Home</Link>
                            <Link href="/portraits" className={`${styles.navItem} ${styles.navText}`}>Portraits</Link>
                            <Link href="/#testimonials" className={`${styles.navItem} ${styles.navText}`}>Testimonials</Link>
                            <Link href="/plans-pricings" className={`${styles.navItem} ${styles.navText}`}>Plans & Pricings</Link>
                            <Link href="/#contact" className={`${styles.navItem} ${styles.navText}`}>Contact</Link>
                            <Link href="/get-started" className={styles.navButton}>Get Started</Link>
                        </div>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Nav;
