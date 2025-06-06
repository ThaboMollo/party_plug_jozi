import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const bio = this.props.data.bio;
    const bio2 = this.props.data.bio2;

    return (
      <section id="about">
        <div className="row">
          <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>{bio}</p>
            <p>{bio2}</p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <i className="fa fa-paper-plane"></i>Get In Touch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
