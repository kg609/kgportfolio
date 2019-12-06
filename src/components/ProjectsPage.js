import React, { Component } from 'react';
import YoutubeClone from "../images/YoutubeClone.png";
import PortfolioDemo from "../images/portfolioDemo.png";
import KgPrimeSteak from "../images/KgPrimeSteak.png";
import HenrysRestaurant from "../images/henrysRestaurant.png";
import CarolinaAleHouse from "../images/CarolinaAleHouse.png";



class ProjectsPage extends Component {

  projectShowcaseModal = (project) => {
    let projectTitle = "";
    let projectImg = "";
    let technologyUsed = "";
    let  projectDescription = "";

    switch(project) {
      case "HenrysRestaurant":
        projectTitle = document.getElementById("henrysTitle")
        
    }
  }

  render() {
    return (
      <div className="ProjectsPage" id="ProjectsPage">
        <h1>Projects</h1>

        <section className="project-section">
          <div className="row">
            <section className="col-md-5 offset-md-1 img-thumbnail text-center">
              <h3 id="henrysTitle">Henry's Restaurant</h3>
              <img src={ HenrysRestaurant } className="project-img" alt="Henry's Restaurant" />
              <p><strong>Technologies: </strong> HTML, CSS, JQuery, and WordPress, and Php</p>
              <a href="https://www.henrysrestaurant.com/" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Website Portfolio</h3>
              <img src={PortfolioDemo} className="project-img" alt="Yelp Camp" />
              <p><strong>Technologies: </strong> HTML, CSS, Bootstrap 3, JQuery, AWS</p>
              <a href="https://tinyurl.com/kiwanegarner" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="#" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>Carolina Ale House</h3>
              <img src={CarolinaAleHouse} className="project-img" alt="KG Prime Steak" />
              <p><strong>Technologies: </strong> HTML, CSS, JQuery, WordPress, and Php</p>
              <a href="https://www.carolinaalehouse.com/" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="https://github.com/kg609/KG-Prime-Steak" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectsPage;
