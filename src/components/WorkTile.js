import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../styles/workTile.css';

const WorkTile = (props) => {
  let techStack = props.tech.split(' ');
  return (
    <div className="workTile">
      <div className="leftContent">
        <div className="superTitle">{props.superTitle}</div>
        <div className="title">{props.title}</div>
        <div className="built">BUILT WITH</div>
        <div className="techSection">
          {techStack.map((elem, key) => (
            <div key={key} className="tech">{elem.toUpperCase()}</div>
          ))}
        </div>
      </div>
      <div className="rightContent">
        <Link to={`/work${props.path}`}><div className="button">See Project</div></Link>
        <div className="box"/>
      </div>
    </div>
  )
};

export default WorkTile;