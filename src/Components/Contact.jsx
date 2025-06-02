import React, { Component } from "react";
// import emailjs from 'emailjs-com';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactForm: {
        loading: false,
        name: props.name,
        mobileNumber: props.mobileNumber,
        email: props.email,
        eventType: props.eventType,
        venue: props.venue,
        date: props.date,
        time: props.time,
      }
    }
  }

	handleName = (e) => {
		var contactForm = this.state.contactForm;
		contactForm.name = e.target.value;
		this.setState({contactForm: contactForm});
	}
	handleEmail = (e) => {
		var contactForm = this.state.contactForm;
		contactForm.email = e.target.value;
		this.setState({contactForm: contactForm});
	}
  handleSubject = (e) => {
    var contactForm = this.state.contactForm;
    contactForm.subject = e.target.value;
    this.setState({contactForm: contactForm})
  }
	handleMessage = (e) => {
		var contactForm = this.state.contactForm;
		contactForm.message = e.target.value;
		this.setState({contactForm: contactForm});
	}
  
  handleChange = (name, value) => {
    this.setState(prevState => ({
      contactForm: {
        ...prevState.contactForm,
        [name]: value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.contactForm);
    this.setState({loading: true});
    // let templeteParams = {
    //   from_name: this.state.contactForm.name,
    //   to_name: 'Ntate Thabo Mponya',
    //   subject: this.state.contactForm.subject,
    //   message_html: this.state.contactForm.message,
    //   from_email: this.state.contactForm.email
    // };
    // emailjs.send("service_ymndnah", "template_bwg2p3c", templeteParams, "user_iyyo8AYtN3opeCzdbnjvS")
    //   .then(result => {
    //     alert('Message sent, we will respond shortly. Thank you.', result.text);
    //     this.setState({loading: true});
    //     },
    //     error => {
    //         alert('An error was encounter, Please try again', error.text);
    //         this.setState({loading: false});
    //     }
    //   )
      this.resetForm();
  }
  resetForm = () => {
		this.setState({
      name: '',
      mobileNumber: '',
      email: '',
      eventType: '',
      venue: '',
      date: '',
      time: '',
		})
	}

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactMessage;
    const header =  this.props.data.contactHeader;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <h1>{header}</h1>
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.handleSubmit} id="contactForm" name="sendMessage">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    size="50"
                    placeholder="Hi, My name is..."
                    required
                    value={this.state.name}
                    onChange={(e) => this.handleChange('name', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    id="mobileNumber"
                    size="35"
                    placeholder="My number is..."
                    required
                    value={this.state.mobileNumber}
                    onChange={(e) => this.handleChange('mobileNumber', e.target.value)}
                  />
                  <input
                    type="email"
                    id="email"
                    size="50"
                    placeholder="and my email is..."
                    required
                    value={this.state.email}
                    onChange={(e) => this.handleChange('email', e.target.value)}
                  />
                </div>

                <div>
                  <span>I'm having a</span>
                  <input
                    type="text"
                    id="eventType"
                    placeholder="Corporate Event/Wedding/Party"
                    required
                    value={this.state.eventType}
                    onChange={(e) => this.handleChange('eventType', e.target.value)}
                  />
                  
                  <span>taking place at</span>
                  <input
                    type="text"
                    id="venue"
                    placeholder="Venue Location"
                    required
                    value={this.state.venue}
                    onChange={(e) => this.handleChange('venue', e.target.value)}
                  />
                  
                  <span>on the</span>
                  <br />
                  <input
                    type="date"
                    id="date"
                    placeholder="dd/mm/yyyy"
                    required
                    value={this.state.date}
                    onChange={(e) => this.handleChange('date', e.target.value)}
                  />
                  <br />
                  
                  <span>and starting at</span>
                  <br />
                  <input
                    type="time"
                    id="time"
                    placeholder="12:00"
                    required
                    value={this.state.time}
                    onChange={(e) => this.handleChange('time', e.target.value)}
                  />
                </div>
                {/*Need to ask product owner if there's a specific product which is our unique
                selling point and if that the 360 booth*/}
                <div>
                  <button className="submit" type="submit">Submit</button>
                </div>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
