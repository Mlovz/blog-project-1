import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ type, to, variant, children }) => {
  return (
    <>
      {to ? (
        <Link to={to} className={`btn ${variant || ""}`}>
          {children}
        </Link>
      ) : (
        <button type={type} className={`btn ${variant || ""}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
