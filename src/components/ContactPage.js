import React, { Component } from 'react';
import PeakFitness from "../images/PeakFitness.png";
import ViciousCycles from "../images/ViciousCycles.png";
import YelpCamp from "../images/YelpCamp.png";



class ContactPage extends Component {
  render() {
    return (
      <div className="ContactPage" id="ContactPage">
        
        <p>&copy; KG Portfolio 2018</p>

        <a className="social-media" target="_blank" href="https://github.com/kg609">
          <i className="fa fa-github-square fa-3x"></i>
        </a>
        <a className="social-media" target="_blank" href="https://www.linkedin.com/in/kiwane-garner-41a504131/">
          <i className="fa fa-linkedin-square fa-3x"></i>
        </a>
      </div>
    );
  }
}

export default ContactPage;
