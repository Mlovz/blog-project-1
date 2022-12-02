import React from "react";
import "./nav-auth.scss";
import { Button } from "components";

const NavAuth = () => {
  return (
    <div className="nav-auth">
      <Button to="/login" variant="solid">
        Войти
      </Button>
      <Button to="/register" variant="outline">
        Регистрация
      </Button>
    </div>
  );
};

export default NavAuth;
