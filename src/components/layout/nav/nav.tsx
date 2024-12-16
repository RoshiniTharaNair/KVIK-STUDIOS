"use client"

import React, { useState, useEffect} from 'react'
import Link from 'next/link'
// import SearchComponent from '../search-component'
// import MobileMenu from '../mobile-menu/templates'
// import useToggleState from "@/lib/hooks/use-toggle-state"
// import { useMobileMenu } from "@/lib/context/mobile-menu-context"
import Hamburger from '@/components/common/components/hamburger'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'; // Make sure to create this CSS Module

// import SideMenu from '../side-menu'
// import CartDropdown from '../cart-dropdown'


const Nav = () => {

    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // padding: 4% 5%; /* Adjust padding to match the design */
    // background-color: #0f1321; /* Dark background color */
    // /* color: white; */
    // height: 80px; 

  return (
    <div className="sticky top-0 inset-x-0 z-50 group " style={{background:"#0f1321",}}>
    <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
      <nav className="txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
        <div className="flex-1 basis-0 h-full flex items-center">
        <div className="block small:hidden">
        <img src="/trans_logo.png" alt="KVIK Studios" style={{width:"4%"}}/>
        <h1 className={styles.navText} style={{ fontSize: "19px",fontWeight: 700 }}>KViK Studios</h1>
        <span className={styles.navText}>|</span>
        <span className={styles.navText}>Exquisite Portraits</span>
                    </div>
            {/* hidden small:block and hidden small:flex - not displayed in mobile view */}
            {/* small:hidden - displayed in mobile view */}
            <div className="hidden small:block h-full">
            <img src="/trans_logo.png" alt="KVIK Studios" style={{width:"4%"}}/>
        <h1 className={styles.navText} style={{ fontSize: "19px",fontWeight: 700 }}>KViK Studios</h1>
        <span className={styles.navText}>|</span>
        <span className={styles.navText}>Exquisite Portraits</span> </div>
        </div>

        <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
          <div className="hidden small:flex items-center gap-x-6 h-full">
            {/* {process.env.FEATURE_SEARCH_ENABLED && (
              <DesktopSearchModal
                state={searchModalState}
                close={searchModalClose}
                open={searchModalOpen}
              />
            )} */}
              {/* <SearchComponent isSideMenuOpen={isSideMenuOpen} /> */}
              <Link className="" href="/wishlist">
              Wishlist
            </Link>
              <Link className="" href="/account">
              Account
            </Link>
          </div>
          <Link href="/home" className={`${styles.navItem} ${styles.navText}`}>Home</Link>
        <Link href="/portraits" className={`${styles.navItem} ${styles.navText}`}>Portraits</Link>
        <Link href="/#testimonials" className={`${styles.navItem} ${styles.navText}`}>Testimonials</Link>
        <Link href="/plans-pricings" className={`${styles.navItem} ${styles.navText}`}>Plans & Pricings</Link>
        <Link href="/#contact" className={`${styles.navItem} ${styles.navText}`}>Contact</Link> {/* Modified Link for Contact */}
        <Link href="/get-started" className={styles.navButton}>Get Started</Link>
        </div>
      </nav>
      {/* <MobileMenu /> */}
    </header>
  </div>  )
}

export default Nav