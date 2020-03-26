import React, { Component } from 'react';
import './contact.scss';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__header">Contact me</div>
        <div className="contact__list">
            <a href="mailto:kevin95cassar@gmail.com"><span className="animate">Email</span></a>
            <a href="tel:+33617542071"><span className="animate">Phone</span></a>
            <a href="https://www.linkedin.com/in/kévin-cassar-6b790516b" target="_blank" rel="noopener noreferrer"><span className="animate">LinkedIn</span></a>
        </div>
      </div>
    )
  }
}

export default Contact;
