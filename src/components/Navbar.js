import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-scroll"
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Nathaniel Hernandez</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link smooth={true} to="about" className="nav-link active" aria-current="page" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
            </ul>
          
        </div>
      </div>
</nav>
  )
}

export default Navbar;
