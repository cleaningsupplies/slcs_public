import React from 'react';
import styles from "../css/about.module.css";

export default function About() {

  document.body.style.backgroundColor = "#BAD4D7";

  return (
    <>
      <div className={styles['intro']}>
          Hej, it's very nice to meet you!
      </div>
    </>
  )
}
