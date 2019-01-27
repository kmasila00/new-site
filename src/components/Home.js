import React from 'react';
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
          <a>email</a>
          <a>resume</a>
          <a>github</a>
          <a>linkedin</a>
          {'  */'}
        </div>
    </div>
    <div><p>4</p><div>{'}'}</div></div>
  </div>
);

export default Home;