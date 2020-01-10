import React, { Component } from 'react';



class HomePage extends Component {
  render() {
    return (
      <div className="HomePage" id="HomePage">

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <h1 className="title">Trust The Process</h1>
            </div>
            <div className="carousel-item">
              <h1>Code Every Day</h1> 
            </div>
            <div className="carousel-item">
              <h1>Practice Makes Perfect</h1>
            </div>
          </div>
        </div>

        <section className="img-section">
          <div className="row">
            <section className="col-md-6 img1">
            </section>
            <section className="col-md-6">
              <div className="row">
                <section className="col-md-12 img2">
                </section>
              </div>
              <div className="row">
                <section className="col-sm-6 img3">

                </section>
                <section className="col-sm-6 img4">

                </section>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;

