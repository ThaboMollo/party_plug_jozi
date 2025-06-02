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
            
          </div>
        </div>
      </section>
    );
  }
}

export default About;
