import React from 'react';
import Navbar from './Navbar';

const PageContainer = (props) => (
  <div className="pageContainer">
    <Navbar location={props.location} isHome={props.isHome} />
    {props.children}
  </div>
);

export default PageContainer;