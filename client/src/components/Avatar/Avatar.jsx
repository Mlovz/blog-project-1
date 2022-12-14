import React from "react";
import "./avatar.scss";

const Avatar = (src) => {
  return (
    <img
      className="avatar"
      src={
        src
          ? src
          : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
      }
      alt=""
    />
  );
};

export default Avatar;
