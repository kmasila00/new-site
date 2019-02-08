import React from 'react';
import '../styles/projectPage.css';

const ProjectPageCI = () => {
  let desc = "The OvationTix Consumer Interface provided clients a platform for their patrons to purchase tickets. \n" +
    "However, the design was not user friendly nor mobile responsive. Working with the design team, we were able to \n" +
    "completely refresh the UI and develop a new innovative and intuitive e-commerce experience that was also mobile \n" +
    "responsive";

  return (
    <div className="projectPageContainer">
      <div className="firstPage">
        <div className="leftContent">
          <div className="projectSuperTitle">CONSUMER INTERFACE</div>
          <div className="overview">OVERVIEW</div>
          <div className="description">{desc}</div>
        </div>
        <div className="rightContent">
          <img className="desktopPic" src={require('../images/list_view_desktop.jpg')}/>
          <img className="mobilePic" src={require('../images/list_view_mobile.jpg')} />
        </div>
      </div>
      <div className="secondPage">
        
      </div>
    </div>
  )
};

export { ProjectPageCI };
