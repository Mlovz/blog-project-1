import React from "react";
import NavAuth from "./NavAuth/NavAuth";
import "./navbar.scss";
import NavMenu from "./NavMenu/NavMenu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, token: isAuth } = useSelector((state) => state.auth);

  return (
    <div className="nav">
      <div className="container">
        <div className="nav_wrap">
          <Link to="/" className="nav-logo"></Link>

          {isAuth ? <NavMenu /> : <NavAuth />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
