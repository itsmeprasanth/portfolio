import React from "react";
function About() {
  return (
    <div>
      <h1 className="text-center">Wanted to Know About me</h1>
      <h1 className="text-center">Welcome</h1>
      <div className="about-main justify-content-center">
        <p>
          Hello guys,
          <br /> Iam VOGGU NITHYA PRASANTH <br />
          from Vellore Institute of Technology , Chennai <br />
          Currently studing 3rd year in Computer Science Engineering
        </p>
        <ul className="list-inline ">
          <li className="list-inline-item">
            I’m currently learning more programming languages
          </li>
          <li>I had already learnt basic C, C++, Java, Python</li>
          <li>I will do Compitive Coding in C++, Java</li>
          <li>Iam currently working on Devolopment Projects.</li>
          <li>
            Iam now intrested in moving towards Android Devolopment and Web
            Development{" "}
          </li>
        </ul>
        <h4 className="text-center">Education</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Qualification</th>
              <th scope="col">Institute</th>
              <th scope="col">Grade</th>
              <th scope="col">Year of Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">B.tech</th>
              <td>Vellore Institute of Technology,Chennai</td>
              <td>8.35 CGPA</td>
              <td>2021 - Present</td>
            </tr>
            <tr>
              <th scope="row">12th</th>
              <td>Narayana junior college, Ongole</td>
              <td>95.4 %</td>
              <td>2019 - 2021</td>
            </tr>
            <tr>
              <th scope="row">10th</th>
              <td>Narayana e-Techno School, Ongole</td>
              <td>10 GPA</td>
              <td>2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;