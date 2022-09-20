import React from 'react'
import styles from "../css/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

  const links = {
    "github" : "https://github.com/cleaningsupplies",
    "linkedIn" : "https://www.linkedin.com/in/lindnerstephanie/",
    "instagram" : "https://www.instagram.com/cleaninsupplies/",
  }

  return (
    <div className={styles["footer"]}>
      <div className={styles["navigation"]}>
          <a className={styles["navItem"]} href='/'>Projects</a>
          <a className={styles["navItem"]} href='/about'>About</a>
          <a className={styles["navItem"]} href='/contact'>Contact</a>
      </div>
      <div className={styles["space"]}></div>
      <div className={styles["copyright"]}>&#169; Copyright &#8226; 2022 &#8226; Stephanie Lindner</div>
      <div className={styles["icons"]}>
        <a href={links.github} target="_blank" className={styles["icons_link"]}> <FontAwesomeIcon className={styles["github"]} icon={faGithub}></FontAwesomeIcon> </a>
        <a href={links.linkedIn} target="_blank" className={styles["icons_link"]}> <FontAwesomeIcon className={styles["linkedIn"]} icon={faLinkedinIn}></FontAwesomeIcon> </a>
        <a href={links.instagram} target="_blank" className={styles["icons_link"]}> <FontAwesomeIcon className={styles["instagram"]} icon={faInstagram}></FontAwesomeIcon> </a>
       
        
        
      </div>
    </div>
  )
}
