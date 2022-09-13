import React from 'react';
import "../css/projects.css"

export default function Projects() {

  let url = "";

  function openProject(e){
    switch(e.target.id){
      case "_1": url = "https://cleaningsupplies.github.io/todo_public/"; break;
      case "_2": url = "https://cleaningsupplies.github.io/weather_public/"; break;
      case "_3": url = "https://cleaningsupplies.github.io/noodle_public/html/homepage.html"; break;
      default: url = ""; break; 
    }
    window.open(url, '_blank');
  }


  return (
    <>
      <div className='intro'>
          Hej, I’m Stephanie.<br></br>
          A junior front end developer <br></br>
          with a passion for UX/UI Design. 
      </div>
      <table className='projects_container'>
          <tr>
            <td className='rose'>
              <img className='todo' src={require("../img/todo.png")} alt="todo app"></img>
            </td>
            <td className='turquoise'>
              <img className='weather' src={require("../img/weather.png")} alt="weather app"></img>
            </td>
            <td className='dk_turquoise'>
              <img className='noodlee' src={require("../img/noodlee.png")} alt="noodlee restaurant page"></img>
            </td>
          </tr>
          <tr>
            <td className='turquoise'></td>
            <td className='grey'></td>
            <td className='turquoise'></td>
          </tr>
      </table>

      <table className='overlay_container'>
          <tr>
            <td id="_1" onClick={openProject}>
                <span className='project title'>Todo App</span><br></br>
                <span className='project description'>ReactJS, MySQL/LocalStorage</span>
            </td>
            <td id="_2" onClick={openProject}>
                <span className='project title'>Weather App</span><br></br>
                <span className='project description'>ReactJS, OpenWeatherMap API</span>
            </td>
            <td id="_3" onClick={openProject}>
                <span className='project title'>Noodlee</span><br></br>
                <span className='project description'>VanillaJS, Leaflet</span>
            </td>
          </tr>
          <tr>
            <td id="_4"></td>
            <td id="_5"></td>
            <td id="_6"></td>
          </tr>
      </table>
    </>
  )
}
