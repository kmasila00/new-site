import React from 'react';
import Navbar from './Navbar';
import '../styles/home.css';

const Home = () => (
  <div className="mainContent">
    <img className="mainPic" src={require('../images/kelvin.jpg')}/>
    <div style={{paddingBottom: '20px'}}><p>1</p><div><span className="name">_Kelvin Masilamani</span> {'{'}</div></div>
      <div style={{paddingBottom: '20px'}} className="indent"><p>2</p><div>developer.FrontEnd ;</div></div>
      <div style={{paddingBottom: '20px'}} className="indent line3">
      <p>3</p>
      <div style={{opacity: '0.5'}}>
      {'/*  '}
      <a href="mailto:kmasila00@gmail.com?Subject=Hello%20Kelvin" target="_top">email</a>
      <a target="_blank" href="https://drive.google.com/file/d/1akQ3a0t696R5dUUmknHNyGXmWyoqQQsy/view?usp=sharing">resume</a>
      <a target="_blank" href="https://github.com/kmasila00">github</a>
      <a target="_blank" href="https://www.linkedin.com/in/kelvin-masilamani">linkedin</a>
    {'  */'}
      </div>
      </div>
      <div><p>4</p><div>{'}'}</div></div>
  </div>
);

export default Home;