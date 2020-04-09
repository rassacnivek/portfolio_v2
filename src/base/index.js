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
                <ReactFullpage
                  //fullpage options
                  licenseKey={'YOUR_KEY_HERE'}
                  scrollingSpeed={1000} /* Options here */

                  render={
                    ({ state, fullpageApi }) => {
                      return (
                        <>
                          <Header />
                          <About />
                          <Education />
                          <Technologies />
                          <Contact />
                        </>


                        // <ReactFullpage.Wrapper>
                        //   <div className="section">
                        //     <p>Section 1 (welcome to fullpage.js)</p>
                        //     <button onClick={() => fullpageApi.moveSectionDown()}>
                        //       Click me to move down
                        //   </button>
                        //   </div>
                        //   <div className="section">
                        //     <p>Section 2</p>
                        //     <button onClick={() => fullpageApi.moveSectionUp()}>
                        //       Click me to move up
                        //   </button>
                        //   </div>
                        // </ReactFullpage.Wrapper>
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