import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects ? this.props.data.projects : [];
    const testimonials = this.props.data.testimonials ? this.props.data.testimonials : [];

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Our Happy Clients & Events</h1>
            <p className="lead">
              At Jozi Party Plug, we take pride in creating unforgettable experiences for our clients. 
              Browse through our portfolio of successful events and see how we've helped our clients 
              celebrate their special moments in style.
            </p>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects.map((project, index) => (
                <div key={index} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={project.url} title={project.title}>
                      <img alt={project.title} src={`images/portfolio/${project.image}`} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {testimonials.length > 0 && (
          <div className="row">
            <div className="twelve columns">
              <h1>What Our Clients Say</h1>
              <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-item">
                    <div className="testimonial-text">
                      <p>"{testimonial.text}"</p>
                    </div>
                    <div className="testimonial-author">
                      <p>- {testimonial.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Portfolio;
