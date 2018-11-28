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
                <p>My name is Kiwane Garner and I am a self-taught devloper currently attending Wake Tech Community college in pursuit of a web developer degree. So far on my journey to becoming a professional web developer I have learned and become efficient in languages such as HTML5, CSS3, Bootstrap3, Javascript, and React. Although i have become effiecent in using those languages The list or the journey doesn’t end there. I will be continuing to improve my skills in the languages mentioned before and also increase my knowledge and exposure to other languages such as php, java, mysql, Angular, and SASS.</p>
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
