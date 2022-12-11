import React, { useState } from "react";
import "./favorite-btn.scss";

const FavoriteBtn = () => {
  const [isLike, setIsLike] = useState(true);

  const like = () => {
    if (isLike) {
      setIsLike(false);
    } else {
      setIsLike(true);
    }
  };

  return (
    <button className={`favorite-btn ${isLike ? "active" : ""}`} onClick={like}>
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.87492 3.75C5.09048 3.75 2.83325 6.00725 2.83325 8.79167C2.83325 13.8333 8.79159 18.4167 11.9999 19.4828C15.2083 18.4167 21.1666 13.8333 21.1666 8.79167C21.1666 6.00725 18.9093 3.75 16.1249 3.75C14.4198 3.75 12.9123 4.5965 11.9999 5.89216C11.0875 4.5965 9.58006 3.75 7.87492 3.75Z"
          stroke={isLike ? "" : "#454545"}
          fill={isLike ? "#d23669" : ""}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default FavoriteBtn;
