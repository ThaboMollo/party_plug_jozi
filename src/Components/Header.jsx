import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="thick" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            {[
                { name: "Home", path: "#home" },
                { name: "About", path: "#about" },
                // "Pricing",
                // "Portfolio",
                // "Features",
                {name: "Contact", path: "#contact" },
            ].map((item, i) => (
                <li key={i}  className={`${item} === 'Home' ? 'current' : ''`}>
                  <a className="current" href={item.path}>
                    {item.name}
                  </a>
                </li>
            ))}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
