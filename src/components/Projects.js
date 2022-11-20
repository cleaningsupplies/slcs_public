import React from 'react';
import styles from "../css/projects.module.css"

export default function Projects() {

  let url = "";

  function openProject(project){
    switch(project){
      case "todo": url = "https://cleaningsupplies.github.io/todo_public/"; break;
      case "weather": url = "https://cleaningsupplies.github.io/weather_public/"; break;
      case "noodlee": url = "https://cleaningsupplies.github.io/noodle_public/html/homepage.html"; break;
      case "portfolio": alert("You're on it 🙃"); break;
      case "authapp": url = "https://authappslcs.netlify.app/signin"; break;
      default: url = ""; break; 
    }
    window.open(url, '_blank');
  }

  return (
    <div className={styles["projects"]}>
      <div className={styles['intro']}>
          Hej, I'm Stephanie.<br></br>
          I'm a frontend developer <br></br>
          with a passion for UX/UI Design.
      </div>
      <div className={styles['container']}>
        <table className={styles['projects_container']}>
          <tbody>
              <tr>
                <td className={styles['gray']}>
                  <img className={styles['todo']} src={require("../img/todo.png")} alt="todo app"></img>
                </td>
                <td className={styles['gray_blue']}>
                  <img className={styles['weather']} src={require("../img/weather.png")} alt="weather app"></img>
                </td>
                <td className={styles['gray']}>
                  <img className={styles['noodlee']} src={require("../img/noodlee.png")} alt="noodlee restaurant website"></img>
                </td>
              </tr>
              <tr>
                <td className={styles['gray_blue']}>
                  <img className={styles['slcs']} src={require("../img/slcs.png")} alt="portfolio website"></img>
                </td>
                <td className={styles['gray']}>
                  <img className={styles['slcs']} src={require("../img/auth.png")} alt="auth app"></img>
                </td>
                <td className={styles['gray_rose']}></td>
              </tr>
          </tbody>
        </table>

        <table className={styles['overlay_container']}>
          <tbody>
              <tr>
                <td className={styles['fade']} id={styles['_1']} onClick={() => openProject('todo')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Todo App</span><br></br>
                    <span className={`${styles['project']} ${styles['description']}`}>ReactJS, MySQL/LocalStorage</span>
                </td>
                <td className={styles['fade']} id={styles["_2"]} onClick={() => openProject('weather')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Weather App</span><br></br>
                    <span className={`${styles['project']} ${styles['description']}`}>ReactJS, OpenWeatherMap API</span>
                </td>
                <td className={styles['fade']} id={styles["_3"]} onClick={() => openProject('noodlee')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Noodlee</span><br></br>
                    <span className={`${styles['project']} ${styles['description']}`}>VanillaJS, Leaflet/OpenStreetMap</span>
                </td>
              </tr>
              <tr>
                <td className={styles['fade']} id={styles["_4"]} onClick={() => openProject('portfolio')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Portfolio</span><br></br>
                    <span className={`${styles['project']} ${styles['description']}`}>React, NodeJS</span>
                </td>
                <td className={styles['fade']} id={styles["_5"]} onClick={() => openProject('authapp')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Auth App</span><br></br>
                    <span className={`${styles['project']} ${styles['description']}`}>React, Bootstrap, MongoDB</span>
                </td>
                <td className={styles['fade']} id={styles["_6"]}>
                    <span className={`${styles['project']} ${styles['description']}`}>Coming soon...</span>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className={styles['container_responsive']}>
        <table className={styles['projects_container_responsive']}>
          <tbody>
              <tr>
                <td className={styles['gray']}>
                  <img className={styles['todo']} src={require("../img/todo.png")} alt="todo app"></img>
                </td>
              </tr>
              <tr>
                <td className={styles['gray_blue']}>
                  <img className={styles['weather']} src={require("../img/weather.png")} alt="weather app"></img>
                </td>
              </tr>
              <tr>
                <td className={styles['gray']}>
                  <img className={styles['noodlee']} src={require("../img/noodlee.png")} alt="noodlee restaurant website"></img>
                </td>
              </tr>
              <tr>
                <td className={styles['gray_blue']}>
                  <img className={styles['slcs']} src={require("../img/slcs.png")} alt="portfolio website"></img>
                </td>
              </tr>
              <tr>
                <td className={styles['gray']}>
                  <img className={styles['slcs']} src={require("../img/auth.png")} alt="auth app"></img>
                </td>
              </tr>
              {/* <tr>
                <td className={styles['gray_rose']}>..</td>
              </tr> */}
          </tbody>
        </table>

        <table className={styles['overlay_container_responsive']}>
          <tbody>
              <tr>
                <td className={styles['fade']} id={styles['_1']} onClick={() => openProject('todo')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Todo App</span>
                    <span className={`${styles['project']} ${styles['description']}`}>ReactJS, MySQL/LocalStorage</span>
                </td>
              </tr>
              <tr>
                <td className={styles['fade']} id={styles["_2"]} onClick={() => openProject('weather')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Weather App</span>
                    <span className={`${styles['project']} ${styles['description']}`}>ReactJS, OpenWeatherMap API</span>
                </td>
              </tr>
              <tr>
                <td className={styles['fade']} id={styles["_3"]} onClick={() => openProject('noodlee')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Noodlee</span>
                    <span className={`${styles['project']} ${styles['description']}`}>VanillaJS, Leaflet/OpenStreetMap</span>
                </td>
              </tr>
              <tr>
                <td className={styles['fade']} id={styles["_4"]} onClick={() => openProject('portfolio')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Portfolio</span>
                    <span className={`${styles['project']} ${styles['description']}`}>React, NodeJS</span>
                </td>
              </tr>
              <tr>
                <td className={styles['fade']} id={styles["_5"]} onClick={() => openProject('authapp')}>
                    <span className={`${styles['project']} ${styles['title']}`}>Auth App</span>
                    <span className={`${styles['project']} ${styles['description']}`}>React, Boostrap, MongoDB</span>
                </td>
              </tr>
              {/* <tr>
                <td className={styles['fade']} id={styles["_6"]}></td>
              </tr> */}
          </tbody> 
        </table>
      </div>
    </div>
      
  )
}
