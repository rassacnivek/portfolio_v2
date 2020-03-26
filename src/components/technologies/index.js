import React, { Component } from 'react';
import './technologies.scss';

class Technologies extends Component {
  render() {
    const technologiesArray = [
      {
        title: "HTML5"
      },
      {
        title: "CSS3",
      },
      {
        title: "SASS",
      },
      {
        title: "Javascript"
      },
      {
        title: "PHP",
      },
      {
        title: "MySQL",
      },
      {
        title: "React"
      },
      {
        title: "React Native",
      },
      {
        title: "Symfony",
      }
    ];
    return (
      <div className="technologies">
        <div className="technologies__header">Technologies</div>
        <div className="technologies__list">
          {
            technologiesArray.map((el, index) => {
              return <p key={index} className={`technology ${el.class}`}>{el.title}</p>
            })
          }
        </div>
      </div >
    )
  }
}

export default Technologies;
