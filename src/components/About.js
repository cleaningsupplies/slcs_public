import React from 'react';
import styles from "../css/about.module.css";

export default function About() {

  document.body.style.backgroundColor = "#BAD4D7";

  return (
    <div className={styles["about"]}>
   
      <div className={styles['text']}>
        <div className={styles['intro']}>
            Hej, it's very nice to meet you!
        </div>
        
        <div className={styles["description"]}>
            My name ist Stephanie. I'm a 28 year-old junior front end developer from Hamburg, Germany. 
            <br></br>
            <br></br>
            My coding journey began at university where I tought myself how to code in Java. 
            About three years I worked as a research assistant programming interactive user interfaces for mobile devices in android studio.
            I hold master of science in applied cognitive and media science with a focus in computer science.
            After university I started working in IT for the city of Hamburg. 
            Ever since I missed programming and now I'm getting back on track. Programming and constantly learning new thing as a junior front end developer.
            <br></br>
            <br></br>
            Let's get in contact ->
        </div>
      </div>
     
      <div className={styles["image_container"]}>
        <img className={styles['profile']} src={require("../img/profile_img.jpg")} alt="profile"></img>
      </div> 
    </div>
  )
}
