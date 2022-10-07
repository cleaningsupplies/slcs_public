import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from '../components/Projects';
import styles from "../css/navigation.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';



export default function Navigation() {

    const navbar = `${styles["navbar"]}`;
    const navbar_responsive = `${styles["navbar_responsive"]}`;
    const menu = `${styles['menu']}`;


    function checkSize(){
        const navbar_id = document.querySelector("#navbar");

        if(window.innerWidth > 1146){
            navbar_id.className = navbar;
        }
    }

    function openNavMenu() {
        const navbar_id = document.querySelector("#navbar");

        if(navbar_id.className === navbar_responsive){
            navbar_id.className = navbar;
        }else{
            navbar_id.className = navbar_responsive;
        }
    }

 
    window.addEventListener("resize", () => { checkSize() });


    document.addEventListener("click", (e) => {

        const navbar_id = document.querySelector("#navbar");

        if(navbar_id.className === navbar_responsive && e.target.className === menu || e.target.tagName === "svg" || e.target.tagName === "path"){

        }else{
            navbar_id.className = navbar;
        }
    })


  return (
    <>
        <BrowserRouter className={styles["navigation"]}>
            <div id="navbar" className={styles["navbar"]}>
                <div href="javascript:void(0);" className={styles['menu']} onClick={openNavMenu}>
                        <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={styles["cover"]}></div>
                <div className={`${styles['navItem']} ${styles['projects']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/">
                        Projects
                    </NavLink>
                </div>
                <div className={`${styles['navItem']} ${styles['about']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/about">
                        About
                    </NavLink>
                </div>
                <div className={`${styles['navItem']} ${styles['contact']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/contact">
                        Contact
                    </NavLink>
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
