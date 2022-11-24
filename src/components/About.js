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
              
              {/* My coding journey began in university where I taught myself how to code in Java. 
              About three years I worked as a research assistant programming interactive user interfaces for mobile devices in android studio.
              I hold master of science in applied cognitive and media science with a focus in computer science.
               programming and constantly learning new things as a frontend developer. */}

               My name is Stephanie. I'm an enthusiastic frontend developer with extensive background-knowledge in graphic as well as UX/UI design. 
               My passion is coding and learning new skills. I already gained a great number of experiences through past projects 
               as frontend developer as well as UX/UI designer for a smartphone application in the context of e-health. 
               Furthermore, I have been active as backend developer in numerous distinctive settings. 
               Momentarily I'm working on private projects focusing on frontend tools such as HTML, CSS, JavaScript and React. 
               I am very dedicated to my work and expand my knowledge day by day.

              {/* Ich bin kreative Junior Frontend Entwicklerin mit umfangreichen Kenntnissen in Grafik- und UX/UI-Design. In meinen bisherigen Projekten habe ich aber auch Erfahrungen im Backend gesammelt. Ich programmiere leidenschaftlich gerne und gehe besonders in Themen wie Design, Responsiveness und Accessibility auf. */}

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
