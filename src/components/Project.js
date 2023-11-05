import React from "react";
function Project() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="project-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Language</th>
            <th scope="col">Project Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Word counter</td>
            <td>Html,JavaScript,CSS</td>
            <td>
              <a href="https://github.com/itsmeprasanth/Word-Counter-ReactJs">Link</a>
            </td>
          </tr>
          <tr>
            <td>Calculater</td>
            <td>Html,JavaScript,CSS</td>
            <td>
              <a href="https://github.com/itsmeprasanth/Calculater-App-ReactJS">Link</a>
            </td>
          </tr>
          <tr>
            <td>Colour picker</td>
            <td>Html,JavaScript,CSS</td>
            <td><a href="https://github.com/itsmeprasanth/Colour-Picker-ReactJs">Link</a></td>
          </tr>
          <tr>
            <td>Age Calculator</td>
            <td>Html,JavaScript,CSS</td>
            <td><a href="https://github.com/itsmeprasanth/Age-Calculater-ReactJS">Link</a></td>
          </tr>
          
        </tbody>
      </table>
      </div>
      <br />
    </div>
  );
}

export default Project;