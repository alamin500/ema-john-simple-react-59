import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user.email && (
          <span style={{ color: "white" }}>Hello {user.displayName} </span>
        )}
        {user.email ? (
          <button onClick={logOut}>Log out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
