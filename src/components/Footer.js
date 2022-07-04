import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
   
<div className="container my-5">

  <footer className="text-center text-white">
  
  <div className="container pt-4">
    
    <section className="mb-4">
      
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/nathaniel-hernandez-44838b228" role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={ faLinkedin } style={{ color: "#000000" }}/></a>
      <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/thetryworks"role="button" data-mdb-ripple-color="dark"><FontAwesomeIcon icon={ faGithub } style={{ color: "#000000" }}/></a>
    </section>
    
  </div>
  
  <div className="text-center text-dark p-3">
    © 2020 Copyright: Nate Hernandez
    
  </div>
  
</footer>
  
</div>

  )
}

export default Footer;