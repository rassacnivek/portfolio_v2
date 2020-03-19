import React, { Component } from 'react';
import './about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__header">
          Me, myself and I
        </div>
        <div className="about__presentation">
          <div className="me">
            I'm a Full-Stack Developer who is always ready to increase my knowledge about new technologies and development languages.
          </div>
          <div className="work">
            <p>I'm currently working at <u>Trèfle Applcations</u>, a Web and PowerBI development company that is making tailor-made applications and websites.</p>
            <p>For them, I have worked on several fields, from the maintenance of jewelry creation to the maintenance of electric and eletronic equipment for a large company of transport network, and a grouping of a Customer Relationship Management and an Enterprise Resource Planning in a single application.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
