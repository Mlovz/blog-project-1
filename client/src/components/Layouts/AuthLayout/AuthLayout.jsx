import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./auth-layout.scss";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const isAuth = useSelector((state) => state.auth.token);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
