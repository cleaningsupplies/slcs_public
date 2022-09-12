import React from 'react';
import "../css/projects.css"

export default function Projects() {



  return (
    <>
      <div className='intro'>
          Hej, I’m Stephanie.<br></br>
          A junior front end developer <br></br>
          with a passion for UX/UI Design. 
      </div>
      <table className='projects_container'>
          <tr>
            <td className='rose'></td>
            <td className='turquoise'></td>
            <td className='dk_turquoise'></td>
          </tr>
          <tr>
            <td className='turquoise'></td>
            <td className='grey'></td>
            <td className='turquoise'></td>
          </tr>
      </table>

      <table className='overlay_container'>
          <tr>
            <td id="_1" data-name="Todo App" data-description="React test"></td>
            <td id="_2"></td>
            <td id="_3"></td>
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
