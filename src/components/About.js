import React from "react";
import "../styles/about.css";

const About = () => {
  let description =
    "I first started coding as a sophomore in high school. I started with Visual Basic and Java " +
    "eventually learning JavaScript in my free time. I attended The City College of New York as a Biology major and " +
    "graduated with a degree in the science field. Even as a learned and made my way up the medical field, I made sure " +
    "to make time for coding. It became more of a stress relief for me at that point.\n";
  let description2 =
    "After graduating, I became an EMT and pursed that as a career. Of course I was never able to get rid of the " +
    "habit of sitting in front of a screen coding and reading up on new technologies and frameworks. I soon realized " +
    "that I was enjoying my hobby more than my actual career and the passion I had for coding became the prevalent part " +
    "of my life. I decided to switch careers and pursue software engineering. I start learning on my own before " +
    "attending a full-time bootcamp to further learn and enhance my knowledge.\n";
  let description3 =
    "I have since worked on a few freelance projects and I currently work as a Front End Developer for a company" +
    " where I am able to work with the popular frameworks React and Redux while also enhancing my skills in HTML and CSS";
  return (
    <div className='aboutPage'>
      <div className='leftContent'>
        <div className='superTitle'>Who is</div>
        <div className='title'>Kelvin?</div>
        <div className='header'>
          <div className='mobile-superTitle'>Who is</div>
          <div className='mobile-title'>Kelvin?</div>
        </div>
        <div className='description'>{description}</div>
        <div className='description'>{description2}</div>
      </div>
      <div className='rightContent'>
        <img className='mainPic' src={require("../images/kelv_face.png")} />
      </div>
    </div>
  );
};

export default About;
