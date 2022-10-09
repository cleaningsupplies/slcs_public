import React from 'react';
import styles from "../css/about.module.css";


export default function About() {

  return (
    <div className={styles["about"]}>
      <div className={styles["container"]}> 
        <div className={styles['text_container']}>
          <div className={styles["description"]}>
              <span className={styles['intro']}>
              It's very nice to meet you!
              </span>
              <br></br>
              <br></br>
              <br></br>
              My name is Stephanie. I'm a 28 year-old junior front end developer from Hamburg, Germany. 
              <br></br>
              <br></br>
              My coding journey began in university where I tought myself how to code in Java. 
              About three years I worked as a research assistant programming interactive user interfaces for mobile devices in android studio.
              I hold master of science in applied cognitive and media science with a focus in computer science.
              After university I started working in IT for the city of Hamburg. 
              Ever since, I missed programming and now I'm back on track programming and constantly learning new things as a junior front end developer.
              <br></br>
              <br></br>
              <a href="/contact" className={styles["link"]}>Let's get in touch &#8594;</a>
          </div>
        </div>
        <div className={styles["image_container"]}>
          <div className={styles["image"]}></div>
        </div>
      </div>
    </div>
  )
}
