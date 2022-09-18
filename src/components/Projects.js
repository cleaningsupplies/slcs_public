import React from 'react';
import styles from "../css/projects.module.css"

export default function Projects() {

  document.body.style.backgroundColor = "white";

  let url = "";

  function openProject(project){
    switch(project){
      case "todo": url = "https://cleaningsupplies.github.io/todo_public/"; break;
      case "weather": url = "https://cleaningsupplies.github.io/weather_public/"; break;
      case "noodlee": url = "https://cleaningsupplies.github.io/noodle_public/html/homepage.html"; break;
      default: url = ""; break; 
    }
    window.open(url, '_blank');
  }


  return (
    <>
    <div className={styles["projects"]}>
    <div className={styles['intro']}>
          Hej, I’m Stephanie.<br></br>
          A junior front end developer <br></br>
          with a passion for UX/UI Design.
      </div>
      <table className={styles['projects_container']}>
          <tr>
            <td className={styles['rose']}>
              <img className={styles['todo']} src={require("../img/todo.png")} alt="todo app"></img>
            </td>
            <td className={styles['turquoise']}>
              <img className={styles['weather']} src={require("../img/weather.png")} alt="weather app"></img>
            </td>
            <td className={styles['dk_turquoise']}>
              <img className={styles['noodlee']} src={require("../img/noodlee.png")} alt="noodlee restaurant page"></img>
            </td>
          </tr>
          <tr>
            <td className={styles['turquoise']}></td>
            <td className={styles['grey']}></td>
            <td className={styles['turquoise']}></td>
          </tr>
      </table>

      <table className={styles['overlay_container']}>
          <tr>
            <td id={styles['_1']} onClick={() => openProject('todo')}>
                <span className={`${styles['project']} ${styles['title']}`}>Todo App</span><br></br>
                <span className={`${styles['project']} ${styles['description']}`}>ReactJS, MySQL/LocalStorage</span>
            </td>
            <td id={styles["_2"]} onClick={() => openProject('weather')}>
                <span className={`${styles['project']} ${styles['title']}`}>Weather App</span><br></br>
                <span className={`${styles['project']} ${styles['description']}`}>ReactJS, OpenWeatherMap API</span>
            </td>
            <td id={styles["_3"]} onClick={() => openProject('noodlee')}>
                <span className={`${styles['project']} ${styles['title']}`}>Noodlee</span><br></br>
                <span className={`${styles['project']} ${styles['description']}`}>VanillaJS, Leaflet/OpenStreetMap</span>
            </td>
          </tr>
          <tr>
            <td id={styles["_4"]}></td>
            <td id={styles["_5"]}></td>
            <td id={styles["_6"]}></td>
          </tr>
      </table>
    </div>
      
    </>
  )
}