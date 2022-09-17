import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from '../components/Projects';
import styles from "../css/navigation.module.css"

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
          <div className={styles['navbar']}>
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
              <div className={styles['navItem']}>
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
