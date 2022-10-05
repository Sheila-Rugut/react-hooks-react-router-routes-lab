import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block"
}
function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/"
      exact
      style={linkStyles}>Home Page  
      </NavLink>
      <NavLink to="/movies"
      exact
      style={linkStyles}
      >Movies Page  </NavLink>
      <NavLink to="/directors"
      exact
      style={linkStyles}>Directors Page  </NavLink>
      <NavLink to="/actors"
      exact
      style={linkStyles}>Actors Page  </NavLink>
    </div> 
  );
};

export default NavBar;