import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from '../components/Projects';
import styles from "../css/navigation.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Navigation() {

    const tet = "navigation_navbar__+SmCa";

    function openNavMenu() {
        
        //let x = document.getElementById("myTopnav");

        // document.querySelector(`.${styles.scrollValue}`).innerHTML = "test";
        // document.querySelector(`.${styles.scrollValue}`).style.color = "red";
        let x = document.querySelector("#myTopnav");
        // x.className = "responsive"
        // console.log(x.classList)
        x.className = tet;
        console.log(x.classList)

        //make navigation responsive (add responsive to class)
        
        //let y = document.querySelector(x.className);
        
        // y.style.color = "red"

        //https://codesandbox.io/s/flamboyant-sun-flfpj?file=/src/App.js
        //https://stackoverflow.com/questions/69617831/how-do-i-select-my-css-module-class-using-document-queryselector
//console.log(x.classList, document.querySelector(`.${styles.scrollValue}`));
        // if (x.className === "topnav") {
        //   x.className += " responsive";
        // } else {
        //   x.className = "topnav";
        // }
      }

  return (
    <>
        <BrowserRouter className={styles["navigation"]}>
        {/* <h1 className={styles.scrollValue}>0</h1> */}
            <div id="myTopnav" className={styles["navbar"]}>
                <div className={styles['navItem']}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/">
                        Projects
                    </NavLink>
                </div>
                <div className={styles['navItem']}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/about">
                        About
                    </NavLink>
                </div>
                <div className={`${styles['navItem']} ${styles['contact']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/contact">
                        Contact
                    </NavLink>
                </div>
                <div href="javascript:void(0);" className={`${styles['navItem']} ${styles['menu']}`} onClick={openNavMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
