import React from "react";
import YearLine from "./YearLine";
import ExperienceBlock from "./ExperienceBlock";
import "../styles/experience.css";

const expList = [
  {
    imageUrl: "pp_logo.jpg",
    role: "Software Engineer III",
    company: "Paperless Post",
    timespan: "April 2019 - Jun 2020",
    description: [
      "Developed interactive features and optimizations for the host management system of the platform in React",
      "Assisted in the implementation and migration of GraphQL from Redux and Sagas via Apollo Client",
      "Redesigned and enhanced the email templates using MJML to account for customer feedback",
      "Javascript, React, Redux, Sagas, GraphQL, MJML, Emotion, HTML/CSS"
    ]
  },
  {
    imageUrl: "ot_logo.png",
    role: "Front-End Developer",
    company: "AudienceView",
    timespan: "Aug 2017 - Mar 2019",
    description: [
      "Led the development of a reporting dashboard that allows clients to see a visual\n" +
        "representation of daily ticket sales and other key statistics",
      "Assisted in the development of an innovative and intuitive consumer interface that allowed\n" +
        "clients to provide patrons with a seamless e-commerce experience",
      "Javascript, React, Redux, Jquery, HTML/CSS"
    ]
  },
  {
    imageUrl: "mobilestartup.png",
    role: "Software Engineer (Contract)",
    company: "Stealth Mode Mobile Startup Company",
    timespan: "Jan 2017 - July 2017",
    description: [
      "Collaborated with a team of engineers in an agile environment, developing the user interface\n" +
        "and app experience for a React Native iOS and Android application",
      "Replatformed and architected the state management and routing strategies to use Redux",
      "JavaScript, React Native, Redux, Node, HTML/CSS"
    ]
  },
  {
    imageUrl: "mjd.jpg",
    role: "Software Engineer (Contract)",
    company: "MJD Interactive",
    timespan: "May 2017 - July 2017",
    description: [
      "Participated on a team of 8 engineers in 2-week sprints to complete a project with an\n" +
        "upcoming deadline from contracted company",
      "Lead engineer on the restructuring of a mobile responsive web application with extensive use\n" +
        "of React and Radium",
      "Javascript, React, Node, HTML/CSS"
    ]
  },
  {
    imageUrl: "fullstackacademy.png",
    role: "developer",
    company: "Fullstack Academy",
    timespan: "Apr 2016 - July 2016",
    description: [
      "13-week immersive course software engineering course, specializing in JavaScript"
    ]
  },
  {
    imageUrl: "rx_logo.jpg",
    role: "Pharmacy Technician",
    company: "Bj's Pharmacy, Inc.",
    timespan: "June 2010 - Aug 2015",
    description: [
      "Used the pharmacy’s proprietary computer software to access prescription information which\n" +
        "included patient and prescriber data, drug selection, prescription interpretation and insurance\n" +
        "billing including assistance in technical support for the software when needed",
      "Swiftly calculated dosages, dispensed medication and prepared prescription labels"
    ]
  },
  {
    imageUrl: "seniorcare.png",
    role: "Emergency Medical Technician",
    company: "Senior Care EMS",
    timespan: "June 2014 - Oct. 2014",
    description: [
      "Respond to emergency calls",
      "Assist patients in transport to and from doctor appointments as well as the emergency room"
    ]
  },
  {
    imageUrl: "ccnylogo.jpg",
    role: "Student",
    company: "City College of New York, CUNY",
    timespan: "Aug. 2008 - May 2013",
    description: ["Bachelor of Science in Biology"]
  }
];

const Experience = () => {
  return (
    <div className='expPageContainer'>
      <div className='timeline'>
        <YearLine />
      </div>
      {expList.map((elem, index) => {
        return <ExperienceBlock data={elem} index={index} />;
      })}
    </div>
  );
};

export default Experience;
