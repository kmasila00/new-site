import React from 'react';
import '../styles/experienceBlock.css';

const ExperienceBlock = ({data, index, ...props}) => {
  console.log("INDEX", index);
  return (
    <div className={`blockContainer${index % 2 === 0 ? 'Left' : 'Right'}`}>
      <div className="block">
        <img className="image" src={require(`../images/${data.imageUrl}`)}/>
        <div className="role">{data.role}</div>
        <div className="company">{data.company}</div>
        <div className="timespan">{data.timespan}</div>
        <ul className="listContainer">
          { data.description.map((elem, key) => (
            <li className="descList">{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default ExperienceBlock;