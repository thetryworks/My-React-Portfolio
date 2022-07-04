import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'


export const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" onClick={() => scroll.scrollToTop()} href="#">Nathaniel Hernandez</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link smooth={true} to="about" className="nav-link" href="#">About Me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="resume" className="nav-link" href="#">Resume</Link>
            </li>
            </ul>
          
        </div>
      </div>
</nav>
  )
}

export default Navbar;
