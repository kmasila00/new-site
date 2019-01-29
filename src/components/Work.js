import React from 'react';
import WorkTile from './WorkTile';
import '../styles/work.css';

const Work = () => (
  <div className="workPage">
    <div className="header">_Work {'{'}</div>
      <WorkTile
        superTitle="OvationTix"
        title="Consumer Interface"
        tech="React Redux HTML CSS"
        path="/ci" />
      <WorkTile
        superTitle="OvationTix"
        title="Reporting Dashboard"
        tech="React Redux HTML CSS"
        path="/rpt" />
      <WorkTile
        superTitle="OvationTix"
        title="Admin Interface"
        tech="Jquery HTML CSS"
        path="/adm" />
    <div className="footer">{'}'}</div>
  </div>
);

export default Work;