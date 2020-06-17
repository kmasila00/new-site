import React, { useState } from "react";
import "../styles/navbar.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Navbar = props => {
  const [navOpen, changeOpen] = useState(undefined);
  const toggleNav = () => {
    if (navOpen !== undefined) {
      changeOpen(!navOpen);
    } else {
      changeOpen(true);
    }
  };
  const closeNav = () => {
    changeOpen(false);
  };
  return (
    <>
      <div className='navbar'>
        {props.location.pathname !== "/" && (
          <NavLink className='nameHome' to='/'>
            _Kelvin Masilamani
          </NavLink>
        )}
        <NavLink activeClassName='is-active' to='/about'>
          // About
        </NavLink>
        <NavLink activeClassName='is-active' to='/work'>
          // Work
        </NavLink>
        <NavLink activeClassName='is-active' to='/experience'>
          // Experience
        </NavLink>
      </div>
      <div onBlur={closeNav} className={`side-nav open-${navOpen}`}>
        <img onClick={toggleNav} src={require("../images/hamburger.png")} />
        <NavLink onClick={closeNav} activeClassName='is-active' exact to='/'>
          // Home
        </NavLink>
        <NavLink onClick={closeNav} activeClassName='is-active' to='/about'>
          // About
        </NavLink>
        <NavLink onClick={closeNav} activeClassName='is-active' to='/work'>
          // Work
        </NavLink>
        <NavLink
          onClick={closeNav}
          activeClassName='is-active'
          to='/experience'
        >
          // Experience
        </NavLink>
      </div>
    </>
  );
};
export default Navbar;
