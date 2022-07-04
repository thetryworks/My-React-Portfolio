import React from 'react'

const Resume = () => {
  return (
    <div id="resume" className="resume-wrapper mb-5">
        <div className="container g-5 justify-content-center">
        <h2 className="section-titles text-uppercase text-center mb-5">Resume</h2>
          <div class="row">
            <div class="col-lg-6 col-12">
            <h3>Front-End Proficiencies</h3>
                <ul class="list-group">
                  <li class="list-group-item">HTML</li>
                  <li class="list-group-item">CSS</li>
                  <li class="list-group-item">JavaScript</li>
                  <li class="list-group-item">React</li>
                  <li class="list-group-item">Bootstrap</li>
                </ul>
              </div>
              <div class="col-lg-6 col-12">
              <h3>Back-End Proficiencies</h3>
                <ul class="list-group">
                  <li class="list-group-item">APIs</li>
                  <li class="list-group-item">Node</li>
                  <li class="list-group-item">Express</li>
                  <li class="list-group-item">MySql, Sequelize</li>
                  <li class="list-group-item">MongoDB, Mongoose</li>
                  <li class="list-group-item">Rest</li>
                  <li class="list-group-item">GraphQL</li>
                </ul>
              </div>
              <a href="https://drive.google.com/file/d/1SANdk687ry3jZpjWU5jl6C-2rpO2CMTa/view?usp=sharing" download>Download My Resume</a>
            </div>
        </div>
    </div>
                
  )
}

export default Resume