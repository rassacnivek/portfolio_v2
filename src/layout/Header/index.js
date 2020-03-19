import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="header__text">Hello World</span>
        <span className="header__presentation">Let's scroll down to learn more about me</span>
      </div>
    )
  }
}

export default Header;
