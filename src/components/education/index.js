import React, { Component } from 'react';
import './education.scss';

class Education extends Component {
  render() {
    const schoolArray = [
      {
        year: "Automn 2016 — Summer 2018",
        title: "Higher Technician Certificate - Digital Systems : IT & Networks",
        geo: "Paris, France"
      },
      {
        year: "Automn 2018 — Summer 2019",
        title: "Professional License - Web Programming & Mobile Systems",
        geo: "Paris, France"
      },
      {
        year: "Automn 2019 — Summer 2021",
        title: "Masters Degree - Web Development Expert",
        geo: "Paris, France"
      }
    ];
    return (
      <div className="education">
        <div className="education__header">
          My education
        </div>
        <div className="education__schools">
          {
            schoolArray.map((el, index) => {
              return <div key={index} className="school">
                <span className="year">{el.year}</span>
                <span className="title">{el.title}</span>
                <span className="geo">{el.geo}</span>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Education;
