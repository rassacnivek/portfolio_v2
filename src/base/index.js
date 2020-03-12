import React, { Component } from 'react';
import './base.scss';
import Header from '../layout/Header';
import Home from '../pages/Home';
import Footer from '../layout/Footer';

class Base extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}

export default Base;