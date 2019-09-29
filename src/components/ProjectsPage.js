import React, { Component } from 'react';
import YoutubeClone from "../images/YoutubeClone.png";
import PortfolioDemo from "../images/portfolioDemo.png";
import KgPrimeSteak from "../images/KgPrimeSteak.png";
import HenrysRestaurant from "../images/henrysRestaurant.png";
import CarolinaAleHouse from "../images/CarolinaAleHouse.png";
import lifeLeadership from "../images/lifeLeadership.png"
;


class ProjectsPage extends Component {
  render() {
    return (
      <div className="ProjectsPage" id="ProjectsPage">
        <h1>Projects</h1>

       {/*
        <section className="project-section">
          <div className="row">
          <section className="col-md-5 offset-md-1 text-center project-container">
            <h3>Youtube Clone</h3>
            <img src={YoutubeClone} className="project-img" alt="Youtube Clone" />
            <div className="img-overlay">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <p className="tech-list"><strong>Technologies: </strong> HTML, CSS, Bootstrap 4, React, Node, and Express</p>
            <a href="https://kgyoutubeapp.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
            <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a>
          </section>
          <section className="col-md-5 text-center project-container">
            <h3>PortfolioDemo</h3>
            <img src={PortfolioDemo} className="project-img" alt="Youtube Clone" />
            <div className="img-overlay alt-overlay">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <p className="tech-list"><strong>Technologies: </strong> HTML, CSS, Bootstrap 4, React, Node, and Express</p>
            <a href="https://kgyoutubeapp.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
            <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a>
          </section>
          <section className="col-md-5 offset-md-1 text-center project-container">
            <h3>KgPrimeSteak</h3>
            <img src={KgPrimeSteak} className="project-img" alt="Youtube Clone" />
            <div className="img-overlay alt-overlay">
              <p id="project-overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <p className="tech-list"><strong>Technologies: </strong> HTML, CSS, Bootstrap 4, React, Node, and Express</p>
            <a href="https://kgyoutubeapp.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
            <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a>
          </section>
       */}
        <section className="project-section">
          <div className="row">
            <section className="col-md-5 offset-md-1 img-thumbnail text-center">
              <h3>Henry's Restaurant</h3>
              <img src={HenrysRestaurant} className="project-img" alt="Henry's Restaurant" />
              <p><strong>Technologies: </strong> HTML5, CSS3, JQuery, and WordPress, and Php</p>
              <a href="https://www.henrysrestaurant.com/" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Life Leadership</h3>
              <img src={lifeLeadership} className="project-img" alt="Life  Leadership" />
              <p><strong>Technologies: </strong> HTML5, CSS, Bootstrap 3, JQuery, VB .Net</p>
              <a href="https://www.lifeleadership.com/index.aspx?ssl=1" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="#" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>Carolina Ale House</h3>
              <img src={CarolinaAleHouse} className="project-img" alt="KG Prime Steak" />
              <p><strong>Technologies: </strong> HTML5, CSS3, JQuery, WordPress, and Php</p>
              <a href="https://www.carolinaalehouse.com/" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="https://github.com/kg609/KG-Prime-Steak" target="_blank" className="btn btn-github">View Github</a> */}
            </section>

            {/* <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>KG Prime Steak</h3>
              <img src={KgPrimeSteak} className="project-img" alt="KG Prime Steak" />
              <p><strong>Technologies: </strong> HTML5, CSS3, Sass, Hyperapp</p>
              <a href="https://kgprimesteak.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
              <a href="https://github.com/kg609/KG-Prime-Steak" target="_blank" className="btn btn-github">View Github</a>
            </section> */}
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectsPage;
