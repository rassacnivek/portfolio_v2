import React, { Component } from 'react';
import './home.scss';
import About from '../../components/about';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <About />
      </div>
    )
  }
}

export default Home;
