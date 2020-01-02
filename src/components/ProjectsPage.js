import React, { Component } from 'react';

import lifeLeadership from "../images/lifeLeadership.png";
import HenrysRestaurant from "../images/henrysRestaurant.png";
import CarolinaAleHouse from "../images/CarolinaAleHouse.png";
import SignupNewsletter from "../images/signupNewsletter.png";



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
              {/* <p><strong>Technologies: </strong> HTML, CSS, JQuery, and WordPress, and Php</p> */}
              <br />
              <p style={{textAlign: 'left'}}> 
                    Henry's Restaurant is a Wilmington,NC  based restaurant that serves a variety of dishes from the local ingrediants that they gather.
                    While working with this client I gained a better understanding of creating brand awareness, creating and importing csv's into a mysql database, and 
                    the importance web forms to garther more information about users/customers.
               </p>
                <br />
                <br />
              <a style={{marginTop: '0'}} href="https://www.henrysrestaurant.com/" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <button  onClick={this.handleToggle} >Click me</button> */}
              {/* <a href="https://github.com/kg609/Youtube-Clone" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Life Leadership</h3>
              <img src={lifeLeadership} className="project-img" alt="Life Leadership" />
              {/* <p><strong>Technologies: </strong> HTML5, CSS3, Bootstrap 3, JQuery, SQL, and VB.Net </p> */}
              <br />
              <p style={{textAlign: 'left'}}>Lifeleadership.com has become an Ecommerce platform where many Life products and services are sold and distributed
              to customers. While helping to build this Ecommerce structure I gained a better understanding of MVC patterns, the importance of reusable code/components,
              DRY principles, and user roles and authentication. 
              </p>
                <br />
                <br />
              <a href="https://www.lifeleadership.com/index.aspx" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="#" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5 offset-md-1 img-thumbnail text-center ">
              <h3>Carolina Ale House</h3>
              <img src={CarolinaAleHouse} className="project-img" alt="KG Prime Steak" />
              {/* <p><strong>Technologies: </strong> HTML, CSS, JQuery, WordPress, and Php</p> */}
              <br />
              <p style={{textAlign: 'left'}}>Carolina Ale House is a North Carolina based restaurant/sports bar & grill. The Carolina Ale House 
              is a great place to grab bite to eat and watch fan favorite sports teams compete against one another. While working on this project
              I learned how beneficial web forms are for gathering more insight about customers and I also improved my skills with flex box css by recreating the
              the frontend of the online ordering alegating menu.</p>
                <br />
                <br />
              <a href="https://www.carolinaalehouse.com/" target="_blank" className="btn btn-project">View Full Site</a>
              {/* <a href="https://github.com/kg609/KG-Prime-Steak" target="_blank" className="btn btn-github">View Github</a> */}
            </section>
            <section className="col-md-5  img-thumbnail text-center ">
              <h3>Email Signup Newsletter</h3>
              <img src={SignupNewsletter} className="project-img" alt="Signup Newsletter" />
              {/* <p><strong>Technologies: </strong> HTML5, CSS3, Bootstrap 3, JQuery, SQL, and VB.Net </p> */}
              <br />
              <p style={{textAlign: 'left'}}> The Signup Newsletter is a web form that was created to accept a users's email, first name, and 
              last name. I really enjoyed working on this small project and I was able to learn more about how react JS components. With this project
              I was able to break down the difference between functional and class components, atom design priniciples, state management, es6, and increase my
              knowledge in tools such as storybook for prototyping and testing components. 
              </p>
                <br />
              <a href="https://pedantic-agnesi-e27e88.netlify.com/" target="_blank" className="btn btn-project">View Full Site</a>
              <br />
              <a href="https://github.com/kg609/Signup-News-Letter" target="_blank" className="btn btn-github">View Github</a>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectsPage;
