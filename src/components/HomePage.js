import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage" id="HomePage">
        <h1>With knowledge, <br/>
        passion, heart, and soul</h1>

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
