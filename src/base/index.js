import React, { Component } from 'react';
import './base.scss';
import Header from '../layout/Header';
import About from '../components/about';
import Education from '../components/education';
import Technologies from '../components/technologies';
import Contact from '../components/contact';
import { Lottie } from '@crello/react-lottie';
import animationData from '../assets/loader.json';
import FadeIn from 'react-fade-in';
import ReactFullpage from '@fullpage/react-fullpage';

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
    }, 1750);
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
                <ReactFullpage
                  licenseKey={'eV!2?iH?m4'}
                  scrollingSpeed={1000}
                  render={
                    ({ state, fullpageApi }) => {
                      return (
                        <ReactFullpage.Wrapper>
                          <div className="section">
                            <Header />
                          </div>
                          <div className="section">
                            <About />
                          </div>
                          <div className="section">
                            <Education />
                          </div>
                          <div className="section">
                            <Technologies />
                          </div>
                          <div className="section">
                            <Contact />
                          </div>
                        </ReactFullpage.Wrapper>
                      );
                    }
                  }
                />
              </FadeIn>
            )
        }
      </>
    )
  }
}

export default Base;