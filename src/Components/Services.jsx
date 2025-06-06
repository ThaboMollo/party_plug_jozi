import React, { Component } from "react";

class Services extends Component {
  render() {
    if (!this.props.data) return null;

    const services = this.props.data.services ? this.props.data.services : [];

    return (
      <section id="services">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Our Services</h1>
            <p className="lead">
              We offer a wide range of services to make your event unforgettable. From 360° photo booths to DJ sound systems, we have everything you need for your perfect party.
            </p>

            <div id="services-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {services.map((service, index) => (
                <div key={index} className="columns service-item">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;