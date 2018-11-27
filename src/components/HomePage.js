import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage" id="HomePage">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <h1>With knowledge, <br/> passion, heart, and soul</h1>
            </div>
            <div className="carousel-item">
              <h1>Quote or Phrase 2</h1>
            </div>
            <div className="carousel-item">
              <h1>Quote or Phrase 3</h1>
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
            <section className="col-md-6 col-sm-6">
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

