import React from 'react'

const Project = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <img className="card-img-top" src={props.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.technologies}</p>
                            <a href={props.link} className="btn btn-dark">View Project</a>
                        </div>
                    </div>
                </div>
  )
}

export default Project;