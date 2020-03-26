import React, { Component } from 'react';
import './home.scss';
import About from '../../components/about';
import Education from '../../components/education';
import Technologies from '../../components/technologies';
import Contact from '../../components/contact';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <About />
        <Education />
        <Technologies />
        <Contact />
      </div>
    )
  }
}

export default Home;
