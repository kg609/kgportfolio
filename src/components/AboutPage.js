import React, { Component } from 'react';
import GraduationPic from "../images/GraduationPic.jpg";


class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage" id="AboutPage">
          <h1>About</h1>

          <section className="AboutContent">
            <div className="row">
              <section className="col-md-5 offset-md-1 pb-4 AboutMe">
                
                <p>Hello! My name is Kiwane Garner and I am an experienced Web Developer based out of North Carolina with years of experience building web and mobile applications/services for a variety of industries. 
                        A great communicator, problem-solver, and agile developer with the ability to do full-stack development while specializing in frontend technologies such as HTML, CSS, Bootstrap Javascript, and React. </p>

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
                  <li>SQL Server</li>
                  <li>C#</li>
                </ul>
                </section>

                <section className="col-sm-6">
                <ul className="right-skillset col-md-6 col-sm-6 ">
                  <li>.NET</li>
                  <li>Dot NET Nuke</li>
                  <li>Visual Basic</li>
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
