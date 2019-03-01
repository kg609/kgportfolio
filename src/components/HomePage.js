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
            <h1 className="title">With knowledge, <br/> passion, heart, and soul</h1>
            </div>
            <div className="carousel-item">
              <h1>Code Every Day</h1> 
            </div>
            <div className="carousel-item">
              <h1>Practice Makes Perfect</h1>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
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

