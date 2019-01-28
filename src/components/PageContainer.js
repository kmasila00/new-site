import React from 'react';
import Navbar from './Navbar';

const PageContainer = (props) => (
  <div className="pageContainer">
    <Navbar/>
    {props.children}
  </div>
);

export default PageContainer;