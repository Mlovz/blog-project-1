import React, { useState } from "react";
import "./nav-menu.scss";
import { Button } from "components";
import ArrowDown from "assets/svg/arrow-down.svg";
import { useDispatch } from "react-redux";
import { logout } from "redux/actions/authAction";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onOpen = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <div className="nav-menu">
      <Button to="/add_post">Добавить пост</Button>
      <div className="nav-menu-user">
        <div className="nav-menu-user-ava" onClick={onOpen}>
          <img
            className="nav-menu-user_logo"
            src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
            alt=""
          />
          <img
            className={`nav-menu-user_arrow ${open ? "active" : ""}`}
            src={ArrowDown}
            alt=""
          />
        </div>

        <div className={`nav-menu-dropdown ${open ? "active" : ""}`}>
          <div className="fs-14" onClick={handleLogout}>
            Выйти
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
