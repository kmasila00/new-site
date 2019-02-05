import React from 'react';
import WorkTile from './WorkTile';
import '../styles/work.css';

const Work = (props) => {
  return (
    <div className="workPage">
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
        <WorkTile
          superTitle=""
          title="new2nyc"
          tech="React-Native HTML CSS"
          path="/new" />
        <WorkTile
          superTitle="Your Favorite "
          title="Team Sucks"
          tech="Express Angular Sequelize HTML CSS Gulp"
          path="/yfts" />
        <WorkTile
          superTitle=""
          title="Grok"
          tech="Express Angular Sequelize HTML CSS Gulp"
          path="/grok" />
    </div>
  );
}

export default Work;