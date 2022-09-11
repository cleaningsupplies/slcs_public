import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from '../components/Projects';
import "../css/navigation.css"

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
          <div className='navbar'>
              <div style={{ margin: '10px' }}>
                  <NavLink className={({ isActive }) => (isActive ? 'NavLink active' : 'NavLink inactive')} to="/">
                      Projects
                  </NavLink>
              </div>
              <div style={{ margin: '10px' }}>
                  <NavLink className={({ isActive }) => (isActive ? 'NavLink active' : 'NavLink inactive')} to="/about">
                      About
                  </NavLink>
              </div>
              <div style={{ margin: '10px' }}>
                  <NavLink className={({ isActive }) => (isActive ? 'NavLink active' : 'NavLink inactive')} to="/contact">
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
