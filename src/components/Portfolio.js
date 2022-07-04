import React from 'react';
import Project from "./Project";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
        <div className="container mb-5">
            <h2 className="section-titles text-uppercase text-center mb-3">Portfolio</h2>
            <div className="row g-5 justify-content-center">
                <Project 
                img="https://images.freeimages.com/images/large-previews/25c/abstract-flowers-2-1199959.jpg"
                title="Codewire"
                technologies="HTML, CSS, Javascript, Express, MySQL, Handlebars, Node"
                link="https://github.com/mattparker124/codewire" />
                <Project 
                img="https://images.freeimages.com/images/large-previews/107/green-leaves-1410259.jpg"
                title="Lords of the Table"
                technologies="HTML, CSS, Javascript, Foundation"
                link="https://github.com/mattparker124/lords-of-the-table" />
                <Project 
                img="https://images.freeimages.com/images/large-previews/91a/abstract-2-1564490.jpg"
                title="Social Network API"
                technologies="Javascript, Node, Mongoose, MongoDB, Express, Moment.js"
                link="https://github.com/thetryworks/Social-Network-API" />
                <Project 
                img="https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg"
                title="Employee Tracker"
                technologies="Javascript, Node, SQL"
                link="https://github.com/thetryworks/Employee-Tracker" />
                <Project 
                img="https://images.freeimages.com/images/large-previews/5f1/beach-resort-1395730.jpg"
                title="Note Taker"
                technologies="HTML, CSS, Javascript, Node, Express"
                link="https://github.com/thetryworks/Note-Taker" />
                <Project 
                img="https://images.freeimages.com/images/large-previews/c03/colour-math-function-1170167.jpg"
                title="E-commerce-Back-End"
                technologies="Javascript, Node, MySQL, Sequelize, Express"
                link="https://github.com/thetryworks/E-commerce-Back-End" />
            </div>
        </div>
    </div>
    
  )
}

export default Portfolio;