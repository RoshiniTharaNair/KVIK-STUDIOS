// Importing React and other necessary components
import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from '@/components/common/components/hamburger';
import { useMobileMenu } from "@/lib/context/mobile-menu-context";
import styles from './NavbarShort.module.css';

const NavbarShort = () => {
    const { toggle } = useMobileMenu();
    const [isNavbarFull, setIsNavbarFull] = useState(false);

    const handleHamburgerClick = () => {
        toggle(); // This toggles the external state controlling the hamburger menu visibility if needed
        setIsNavbarFull(!isNavbarFull); // Toggle the state for the full navbar
    };

    const closeNavbar = () => {
        setIsNavbarFull(false); // Close the navbar when a link is clicked
    };

    return (
        <div className="fixed top-0 inset-x-0 z-50 group">
            <header className="relative h-16 px-6 mx-auto duration-200 ">
                <nav className="flex items-center justify-between w-full h-full">
                    <div className="flex-1 basis-0 h-full flex items-center">
                        <div className="block small:hidden">
                            <span style={{color:"#c9a25b"}}>
                                <Hamburger setOpen={handleHamburgerClick} />
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center h-full">
                        <img src="/trans_logo.png" alt="KVIK Studios" style={{ width: "9%" }} />
                        <h1 className={styles.navItem} style={{ fontSize: "19px", fontWeight: 700 }}>KViK Studios</h1>
                    </div>
                </nav>

                {isNavbarFull && (
                    <div className="fixed w-full h-96 left-0" style={{ zIndex: 10, background: "#0f1321" }}>
                        <nav className="flex flex-col h-full pl-9 pt-7">
                            <Link href="/" className={`${styles.navItem} my-1`} onClick={closeNavbar}>Home</Link>
                            <Link href="/portraits" className={`${styles.navItem} my-1`} onClick={closeNavbar}>Portraits</Link>
                            <Link href="/#testimonials" className={`${styles.navItem} my-1`} onClick={closeNavbar}>Testimonials</Link>
                            <Link href="/plans-pricings" className={`${styles.navItem} my-1`} onClick={closeNavbar}>Plans & Pricing</Link>
                            <Link href="/#contact" className={`${styles.navItem} my-1`} onClick={closeNavbar}>Contact Us</Link>
                            <Link href="/get-started" className={`${styles.navItem} my-1`} onClick={closeNavbar}>Get Started</Link>
                        </nav>
                    </div>
                )}
            </header>
        </div>
    );
};

export default NavbarShort;
