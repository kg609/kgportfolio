import React, { Component } from 'react';

import lifeLeadership from "../images/lifeLeadership.png";
import HenrysRestaurant from "../images/henrysRestaurant.png";
import CarolinaAleHouse from "../images/CarolinaAleHouse.png";



class ProjectsPage extends Component {
state = { isVisible: false ,}

  handleToggle = () => {
    this.setState({ isVisible: !this.state.isVisible })

    console.log(this.state.isVisible)
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
              <br />
              <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <br />
              <a href="https://www.henrysrestaurant.com/" target="_blank" className="btn btn-project">View Full Site</a>
              <button  onClick={this.handleToggle} >Click me</button>
              {/* <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Website Portfolio</h3>
              <img src={lifeLeadership} className="project-img" alt="Life Leadership" />
              <p><strong>Technologies: </strong> HTML5, CSS3, Bootstrap 3, JQuery, and VB.Net </p>
              <br />
              <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <br />
              <a href="https://www.lifeleadership.com/index.aspx" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="#" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>Carolina Ale House</h3>
              <img src={CarolinaAleHouse} className="project-img" alt="KG Prime Steak" />
              <p><strong>Technologies: </strong> HTML, CSS, JQuery, WordPress, and Php</p>
              <br />
              <p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <br />
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
