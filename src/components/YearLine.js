import React from 'react';
import '../styles/yearLine.css';

const YearLine = (props) => {
  return (
    <div className="yearLineContainer">
      <div className="year">2019</div>
      <div style={{height: '550px'}} className="line" />
      <div className="year">2017</div>
      <div style={{height: '1000px'}} className="line" />
      <div className="year">2016</div>
      <div style={{height: '410px'}} className="line" />
      <div className="year">2015</div>
      <div style={{height: '460px'}} className="line" />
      <div className="year">2014</div>
      <div style={{height: '430px'}} className="line" />
      <div className="year">2013</div>
      <div style={{height: '410px'}} className="line" />
    </div>
  )
};

export default YearLine;
