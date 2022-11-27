import React, { useState, useEffect } from "react";
//import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./navElements";
import { Link } from "react-router-dom";
import axios from "axios";
//import "./mynav.css";


const Navbar = () => {
 
  //const navigate = useNavigate();

  // const navigate = useNavigate();

  return (
    <>
      
      <Nav>
        
        
        <NavMenu>
        <NavLink to="/">
        Home
        </NavLink>
          <NavLink to="/search" activeStyle>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/search"
            ></Link>
            Search Songs
          </NavLink>

          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
         
        </NavMenu>

      </Nav>
    </>
  );
};

export default Navbar;
