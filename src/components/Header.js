import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="nav-items">
          <div className="header-phone">212.555.5555</div>
          <div className="header-login">Login</div>
          <div className="header-menu">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
