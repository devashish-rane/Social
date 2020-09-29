import React, { useContext } from "react";
// import styled from "styled-components";
import ConnectLogo from "./Connect.svg";
import "./css/navbar.css";
import { Link } from "react-router-dom";

import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
// import Icon from '@material-ui/core/Icon';

//imported Userdata context
import { userObjectContext as userContext } from "../App.js";

function Navbar() {
  //using conetxt for user data
  const { userName, isLoggedIn, setIsLoggedIn } = useContext(userContext);
  // console.log(userName);

  //related to material UI select tag state
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [isLoggedIn, toggleLogin] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ////material UI core

  const toggleLoginHandler = (e) => {
    //  e.preventDefault();
    if (isLoggedIn === false) {
      setIsLoggedIn(true);
    }
  };

  const toggleLogoutHandler = (e) => {
    //  e.preventDefault();
    if (isLoggedIn === true) {
      setIsLoggedIn(false);
      handleClose();
    }
  };

  return (
    <div className="navbar">
      {/* logo */}

      <div className="connect">
        <Link to="/">
          <img className="SVG" src={ConnectLogo} alt="LOGO" />
        </Link>
        <span className="logo_name">Connect</span>
      </div>

      {/* searchbar */}
      <div className="searchbar">
        <input className="no_outline" type="text" placeholder="search"></input>
        <button className="no_outline">Search</button>
      </div>

      {/* nav buttons */}
      <div className="nav_right">
        {isLoggedIn && (
          <div className="account_details">
            <Avatar src="https://ui-avatars.com/api/?name=John+Doe" />
            <h2 className="username">{userName} </h2>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <Button
              className="login_button"
              variant="contained"
              color="primary"
              onClick={toggleLoginHandler}
            >
              {" "}
              LOGIN
            </Button>
          </div>
        )}

        <Button
          className="menu_button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Settings
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/interests">
            <MenuItem onClick={handleClose}>Interests</MenuItem>
          </Link>

          <Link to="/account">
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Link>

          <MenuItem onClick={toggleLogoutHandler}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

// trying styled components
// const SNavbar = styled.div`
//   display: flex;
//   background-color: lightblue;
//   align-content: center;
//   justify-content: space-evenly;
// `;

export default Navbar;
