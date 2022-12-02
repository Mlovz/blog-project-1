import { Button, Form, Heading, Input } from "components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

import { useDispatch } from "react-redux";
import { login } from "redux/actions/authAction";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(userData, navigate));
  };

  return (
    <div className="login">
      <div className="login-box">
        <Heading>Войти</Heading>

        <Form onSubmit={onSubmit}>
          <div className="form-group">
            <Input
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="password"
              value={userData.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="login-forgot">
            <Link to="/forgot_password" className="fs-12 ">
              Забыли пароль?
            </Link>
          </div>

          <div className="form-group">
            <Button type="submit">Войти</Button>
          </div>
        </Form>
        <p className="fs-12 login-link">
          Нет аккаунта?
          <Link to="/register">Создать</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
