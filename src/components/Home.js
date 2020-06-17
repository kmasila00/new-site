import React from "react";
import "../styles/home.css";

const Home = props => {
  return (
    <div className='mainContent'>
      <img className='mainPic' src={require("../images/kelvin.jpg")} />
      <div className='padding-bottom'>
        <p>1</p>
        <div>
          <span className='name'>_Kelvin Masilamani</span> {"{"}
        </div>
      </div>
      <div className='indent padding-bottom'>
        <p>2</p>
        <div>developer.FrontEnd ;</div>
      </div>
      <div className='indent padding-bottom line3'>
        <p>3</p>
        <div className='links' style={{ opacity: "0.5" }}>
          {"/*  "}
          <a
            href='mailto:kmasila00@gmail.com?Subject=Hello%20Kelvin'
            target='_top'
          >
            email
          </a>
          <a
            target='_blank'
            href='https://drive.google.com/file/d/11m2orwMjPkV37BjLpPOgUFjajQi4uuFG/view?usp=sharing'
          >
            resume
          </a>
          <a target='_blank' href='https://github.com/kmasila00'>
            github
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/kelvin-masilamani'
          >
            linkedin
          </a>
          {"  */"}
        </div>
      </div>
      <div>
        <p>4</p>
        <div>{"}"}</div>
      </div>
    </div>
  );
};

export default Home;
