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
                
                <p>Hello, my name is Kiwane Garner and I am a highly motivated and passionate web developer who enjoys producing content to help improve 
                      the lives of others. I am always looking for ways to improve my craft and leave an everlatsting experience for users that use my products or services.</p>

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
