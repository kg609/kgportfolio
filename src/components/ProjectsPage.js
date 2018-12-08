import React, { Component } from 'react';
import YoutubeClone from "../images/YoutubeClone.png";
import YelpCamp from "../images/YelpCamp.png";
import KgPrimeSteak from "../images/KgPrimeSteak.png";
import KgWebBlogs from "../images/KgWebBlogs.png";



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
              <a href="https://kgyoutubeapp.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
              <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a>
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Yelp Camp</h3>
              <img src={YelpCamp} className="project-img" alt="Yelp Camp" />
              <p><strong>Technologies Used:</strong> HTML, CSS, Bootstrap 3, EJS, Node, Express, and MongoDB</p>
              <a href="https://ancient-headland-83860.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
              <a href="#" target="_blank" className="btn btn-github">View Github</a>
            </section>
            <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>KG Prime Steak</h3>
              <img src={KgPrimeSteak} className="project-img" alt="KG Prime Steak" />
              <p><strong>Technologies Used:</strong> HTML5, CSS3, Sass, Hyperapp</p>
              <a href="https://kgprimesteak.herokuapp.com/" target="_blank" className="btn btn-project">View Full Site</a>
              <a href="https://github.com/kg609/KG-Prime-Steak" target="_blank" className="btn btn-github">View Github</a>
            </section>
            {/*<section className="col-md-5 img-thumbnail text-center ">
              <h3>KG Web Blogs</h3>
              <img src={KgWebBlogs} className="project-img" alt="KG Web Blogs" />
              <p><strong>Technologies Used:</strong> Wordpress, PHP, CSS3</p>
              <a href="https://tinyurl.com/kgwebblog" target="_blank" className="btn btn-project">View Full Site</a>
              <a href="#" target="_blank" className="btn btn-github">View Github</a>
    </section> */}
          </div>
        </section>
      </div>

      
    );
  }
}

export default ProjectsPage;
