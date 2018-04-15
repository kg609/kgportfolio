import React, { Component } from 'react';
import YoutubeClone from "../images/YoutubeClone.png";
import YelpCamp from "../images/YelpCamp.png";
import Division10 from "../images/Division10.png";



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
              <img src={Division10} className="project-img" alt="Division 10" />
              <p><strong>Technologies Used:</strong> HTML5, CSS3, Bootstrap 4</p>
              <a href="http://www.thedivision10.com.s3-website.us-east-2.amazonaws.com/" target="_blank" className="btn btn-secondary">View Full Site</a>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectsPage;
