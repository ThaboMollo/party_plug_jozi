import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";

import About from "./Components/About.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Components/Contact.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Services from "./Components/Services.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      appData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/appData.json", // Changed from relative to absolute path
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ appData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.appData.main} />
        <About data={this.state.appData.main} />
        <Services data={this.state.appData.main} />
        <Portfolio data={this.state.appData.portfolio} />
        <Contact data={this.state.appData.main} />
        <Footer data={this.state.appData.main} />
      </div>
    );
  }
}

export default App;
