import React from 'react';
import '../styles/projectPage.css';

const Images = (props) => (
  <div style={{position: 'relative'}}>
    <img style={props.style} className="desktopPic" src={require(`../images/${props.desktop}`)}/>
    { props.mobile &&
      <img className="mobilePic" src={require(`../images/${props.mobile}`)} />
    }
  </div>
)

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
          <Images
            desktop={'list_view_desktop.jpg'}
            mobile={'list_view_mobile.jpg'} />
        </div>
      </div>
      <div className="secondPage">
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Images
            desktop={'master_calendar_desktop.jpg'}
            mobile={'master_calendar_mobile.png'} />
          <div className="overview">CALENDAR VIEW</div>
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <div className="overview">SERIES DETAIL PAGE</div>
          <Images
            desktop={'show_details_desktop.jpg'}
            mobile={'show_details_mobile.jpg'} />
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '50'}}>
          <Images
            desktop={'cart_desktop.jpg'}
            mobile={'cart_mobile.jpg'} />
          <div className="overview">CART VIEW</div>
        </div>
      </div>
    </div>
  )
};

const ProjectPageRPT = () => {
  let desc = "The OvationTix Reporting Dashboard was built to provide clients with an amazing visual representation \n" +
    "of their sales and ticket data. In addition, features that allowed for clients to manipulate data to build better \n" +
    "reports for meetings as well comparing the success of multiple series along the same graph. Complimenting these features \n" +
    "with a goal tracker, we have built the future of data representation in the industry";

  return (
    <div className="projectPageContainer">
      <div className="firstPage">
        <div className="leftContent">
          <div className="projectSuperTitle">REPORTING DASHBOARD</div>
          <div className="overview">OVERVIEW</div>
          <div className="description">{desc}</div>
        </div>
        <div className="rightContent">
          <Images
            desktop={'list_view_desktop.jpg'}
            mobile={'list_view_mobile.jpg'} />
        </div>
      </div>
      <div className="secondPage">
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Images
            desktop={'master_calendar_desktop.jpg'}
            mobile={'master_calendar_mobile.png'} />
          <div className="overview">TICKET BREAKDOWN</div>
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <div className="overview">SERIES COMPARISON</div>
          <Images
            desktop={'show_details_desktop.jpg'}
            mobile={'show_details_mobile.jpg'} />
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '50'}}>
          <Images
            desktop={'cart_desktop.jpg'}
            mobile={'cart_mobile.jpg'} />
          <div className="overview">DAILY REPORT BUILDER</div>
        </div>
      </div>
    </div>
  )
};

const ProjectPageADM = () => {
  let desc = "The OvationTix Admin Interface is a complex program with specific features design to address issues in the \n" +
    "industry. One of these features is known as Households. We have allowed the client and their respective patrons to \n" +
    "build a group where they can track their donations, buy package tickets for the whole household, keep track of notes \n" +
    "as well as other tasks and interations.";

  return (
    <div className="projectPageContainer">
      <div className="firstPage">
        <div className="leftContent">
          <div className="projectSuperTitle">ADMIN INTERFACE</div>
          <div className="overview">OVERVIEW</div>
          <div className="description">{desc}</div>
        </div>
        <div className="rightContent">
          <Images
            desktop={'list_view_desktop.jpg'}
            mobile={null} />
        </div>
      </div>
      <div className="secondPage">
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Images
            desktop={'master_calendar_desktop.jpg'}
            mobile={null} />
          <div className="overview">MEMBERS</div>
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <div className="overview">DONATIONS</div>
          <Images
            desktop={'show_details_desktop.jpg'}
            mobile={null} />
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '50'}}>
          <Images
            desktop={'cart_desktop.jpg'}
            mobile={null} />
          <div className="overview">TASKS</div>
        </div>
      </div>
    </div>
  )
};

const ProjectPageGROK = () => {
  let desc = "Grok was created for the sole purpose of learning. It is a database comprised of articles and topics that \n" +
    "has been shared by other users. With the ability to add topics and resources to learn that topic, a ecosystem or knowledge \n" +
    "was created. Learning plans was a feature that allowed user to customize a way to learn and read different articles as well \n" +
    "share their plan with other users";

  return (
    <div className="projectPageContainer">
      <div className="firstPage">
        <div className="leftContent">
          <div className="projectSuperTitle">GROK</div>
          <div className="overview">OVERVIEW</div>
          <div className="description">{desc}</div>
        </div>
        <div className="rightContent">
          <Images
            desktop={'grok_home.png'}
            mobile={null} />
        </div>
      </div>
      <div className="secondPage">
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Images
            desktop={'grok_topic_page.png'}
            mobile={null} />
          <div className="overview">TOPIC PAGE</div>
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <div className="overview">LEARNING PLANS LIST</div>
          <Images
            desktop={'grok_learning_plan.png'}
            mobile={null} />
        </div>
        <div className="imageContainer" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '50'}}>
          <Images
            desktop={'grok_learning_list.png'}
            mobile={null} />
          <div className="overview">LEARNING PLAN DETAILS</div>
        </div>
      </div>
    </div>
  )
};

const ProjectPageNEW = () => {
  let desc = "new2nyc is a mobile application created during a 24-hour hackathon for immigrants in New York. It was built to \n" +
    "provide immigrants the ability to locate places close by that would help new york city feel more like home. By providing  \n" +
    "locations like grocery stores that sell their type of food or restaurants from their country and even the consolute for their country, \n" +
    "we have given immigrant families the opportunity to adapt easier in city";

  return (
    <div className="projectPageContainer">
      <div className="firstPage">
        <div className="leftContent">
          <div className="projectSuperTitle">new2nyc</div>
          <div className="overview">OVERVIEW</div>
          <div className="description">{desc}</div>
        </div>
        <div className="rightContent">
          <Images
            style={{height: '600px', width: 'unset'}}
            desktop={'new2nyc_home.jpg'}
            mobile={null} />
        </div>
      </div>
    </div>
  )
};

export { ProjectPageCI, ProjectPageRPT, ProjectPageADM, ProjectPageGROK, ProjectPageNEW };
