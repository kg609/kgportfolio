import React, { Component } from 'react';
import GraduationPic from "../images/GraduationPic.jpg";


class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage" id="AboutPage">
          <h1>About</h1>

          <section className="AboutContent">
            <div className="row">
              <section className="col-md-5 offset-md-1 AboutMe">
                
                <p>I am a self taught developer who is always searching to learn more about the web and the Internet Of Things. 
                  A goal of mine is to earn an internship or a part-time job as a developer and continue to grow as a developer as 
                  well as meet many amazing developers along the way.</p>

                <div className="row">
                <section className="col-md-12 ">
                  <h2>My Skillset</h2>
                </section>
                <section className="col-sm-5 col-xs-3 col-md-6 ">
                <ul className=" left-skillset col-sm-3 col-md-5 ">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                </ul>
                </section>

                <section className="col-sm-6">
                <ul className="right-skillset col-md-6 col-sm-6 ">
                  <li>MySQL</li>
                  <li>Php</li>
                  <li>Wordpress</li>
                  <li>Git</li>
                  <li>GitHub</li>
                </ul>
                </section>
                
                </div>
              </section>
              <section className="col-md-5 myImg">

              </section>
            </div>
          </section>
      </div>
    );
  }
}

export default AboutPage;
