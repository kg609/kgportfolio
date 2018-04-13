import React, { Component } from 'react';
import PeakFitness from "../images/PeakFitness.png";
import YoutubeClone from "../images/YoutubeClone.png";
import YelpCamp from "../images/YelpCamp.png";



class ProjectsPage extends Component {
  render() {
    return (
      <div className="ProjectsPage" id="ProjectsPage">
        <h1>Projects</h1>

        <section className="project-section">
          <div className="row">
            <section className="col-md-5 offset-md-1 img-thumbnail text-center">
              <h3>Youtube Clone</h3>
              <img src={YoutubeClone} className="project-img" alt="Youtube Clone" />
              <p><strong>Technologies Used:</strong> HTML, CSS, Bootstrap 4, React, Node, and Express</p>
              <a href="https://kgyoutubeapp.herokuapp.com/" target="_blank" className="btn btn-secondary">View Full Site</a>
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Yelp Camp</h3>
              <img src={YelpCamp} className="project-img" alt="Yelp Camp" />
              <p><strong>Technologies Used:</strong> HTML, CSS, Bootstrap 3, EJS, Node, Express, and MongoDB</p>
              <a href="https://ancient-headland-83860.herokuapp.com/" target="_blank" className="btn btn-secondary">View Full Site</a>
            </section>
            <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>Peak Fitness</h3>
              <img src={PeakFitness} className="project-img" alt="Peak Fitness" />
              <p><strong>Technologies Used:</strong> HTML5, CSS3, Adobe Dreamweaver</p>
              <a href="http://wcet2.waketech.edu/kmgarner/WEB140/peakFitness/index.html" target="_blank" className="btn btn-secondary">View Full Site</a>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectsPage;
