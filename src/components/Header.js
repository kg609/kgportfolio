import React, { Component } from 'react';
// import resume from '../images/Kiwane_Garner_Resume.pdf';


class Header extends Component {
  render() {
    return (
      <div className="Header" id="HeaderPage">
        <header>
          <nav className="navbar fixed-top navbar-expand-lg">
            <a className="navbar-brand" href="#HeaderPage">Kiwane Garner</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#HeaderPage">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#AboutPage">About</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href={resume} download="Kiwane_Garner_Resume">Resume</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#ProjectsPage">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://kmgarner2017.wordpress.com/" target="_blank">Blogs</a>
                </li>
                {/*<li className="nav-item">
                  <a className="nav-link" href="#ContactPage">Contact</a>
                </li>*/}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
