import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span className="header__text">Hello World</span>
        <span className="header__presentation">Hi, I'm Kévin CASSAR, a Full-Stack Developer based in Paris.</span>
      </header>
    )
  }
}

export default Header;
