import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

// import resume from '../images/Kiwane_Garner_Resume.pdf';



class Header extends Component {
constructor(props){
  super(props);

 
}

scrollToTop = () => {
    scroll.scrollToTop(); 
};


  render() {
    return (
      <div className="Header" id="HeaderPage">
        <header>
          <nav className="navbar fixed-top navbar-expand-lg">
            <h1 className="navbar-brand" onClick={this.scrollToTop}>Kiwane Garner</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link
                      className="nav-link"
                      activeClass="active"
                      to="HeaderPage"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}
                  >Home</Link>
                </li>
                <li className="nav-item">
                  <Link
                      className="nav-link"
                      activeClass="active"
                      to="AboutPage"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}
                  >About</Link>
                </li>
                <li className="nav-item">
                <Link
                      className="nav-link"
                      activeClass="active"
                      to="ProjectsPage"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration= {500}
                  >Projects</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://codelevels.com/" target="_blank">Blog</a>
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
