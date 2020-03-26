import React, { Component } from 'react';
import './base.scss';
import Header from '../layout/Header';
import Home from '../pages/Home';
import { Lottie } from '@crello/react-lottie';
import animationData from '../assets/loader.json';
import FadeIn from 'react-fade-in';

class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        showLoader: false
      });
    }, 1500);
  }

  render() {
    return (
      <>
        {
          this.state.showLoader ? (
            <div className="loading"><div className="loader__container">
              <Lottie
                config={
                  {
                    animationData: animationData,
                    loop: true
                  }
                }
                className="loader"
              />
            </div>
            </div>
          ) : (
              <FadeIn delay={250} className="container">
                <Header />
                <Home />
              </FadeIn>
            )
        }
      </>
    )
  }
}

export default Base;