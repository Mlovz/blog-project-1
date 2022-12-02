import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./app-layout.scss";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const isAuth = useSelector((state) => state.auth.token);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="app-layout">
      <Outlet />
    </div>
  );
};

export default AppLayout;
