import { Button, Form, Heading, Input } from "components";
import "./register.scss";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { register } from "redux/actions/authAction";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirm_password) {
      return setError("Пароли не совпадают!");
    }

    dispatch(register(userData, navigate));
  };

  return (
    <div className="register">
      <div className="register-box">
        <Heading>Регистрация</Heading>

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
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              value={userData.confirm_password}
              onChange={handleChange}
            />
            <span className={`fs-12 ${error ? "input-error" : ""}`}>
              {error}
            </span>
          </div>

          <div className="form-group">
            <Button type="submit">Регистрация</Button>
          </div>
        </Form>
        <p className="fs-12 register-link">
          Есть аккаунт?
          <Link to="/login">Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
