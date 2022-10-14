import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from '../components/Projects';
import styles from "../css/navigation.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Navigation() {

    const navbar = `${styles["navbar"]}`;
    const navbar_responsive = `${styles["navbar_responsive"]}`;
    const menu = `${styles['menu']}`;
    const close = `${styles['close']}`;

    const strings = {
        projects : "Projects",
        about: "About",
        contact: "Contact"
    }


    function checkSize(){
        const navbar_id = document.querySelector("#navbar");

        console.log(navbar_id.className, window.innerWidth)

        if(window.innerWidth > 1326){
            navbar_id.className = navbar;
            document.querySelector(`.${menu}`).style.display = "none";
            document.querySelector(`.${close}`).style.display = "none";
        }else{
            if(navbar_id.className === navbar_responsive){
                document.querySelector(`.${menu}`).style.display = "none";
                document.querySelector(`.${close}`).style.display = "block";
            }else{
                document.querySelector(`.${menu}`).style.display = "block";
                document.querySelector(`.${close}`).style.display = "none";
            }
        }
    }

    function openNavMenu() {
        const navbar_id = document.querySelector("#navbar");

        if(navbar_id.className === navbar_responsive){
            navbar_id.className = navbar;
            document.querySelector(`.${close}`).style.display = "none";
            document.querySelector(`.${menu}`).style.display = "block";
        }else{
            navbar_id.className = navbar_responsive;
            document.querySelector(`.${close}`).style.display = "block";
            document.querySelector(`.${menu}`).style.display = "none";
        }
    }

 
    window.addEventListener("resize", () => { checkSize() });


    document.addEventListener("click", (e) => {

        const navbar_id = document.querySelector("#navbar");

        if(navbar_id.className === navbar_responsive && (e.target.className === menu || e.target.className === close || e.target.tagName === "svg" || e.target.tagName === "path")){

        }else{
            if( navbar_id.className === navbar_responsive){
                document.querySelector(`.${close}`).style.display = "none";
                document.querySelector(`.${menu}`).style.display = "block";
            }
            navbar_id.className = navbar;
        }
    })


  return (
    <>
        <BrowserRouter className={styles["navigation"]}>
            <div id="navbar" className={styles["navbar"]}>
                <div className={styles['menu']} onClick={openNavMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={styles['close']} onClick={openNavMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={styles["cover"]}></div>
                <div className={`${styles['navItem']} ${styles['projects']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/">
                        {strings.projects}
                    </NavLink>
                </div>
                <div className={`${styles['navItem']} ${styles['about']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/about">
                        {strings.about}
                    </NavLink>
                </div>
                <div className={`${styles['navItem']} ${styles['contact']}`}>
                    <NavLink className={({ isActive }) => (isActive ? `${styles['NavLink']} ${styles['active']}` : `${styles['NavLink']} ${styles['inactive']}`)} to="/contact">
                        {strings.contact}
                    </NavLink>
                </div>
                
                
            </div>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
