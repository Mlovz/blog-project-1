import { Avatar, FavoriteBtn } from "components";
import React from "react";
import PostCard from "../PostCard/PostCard";
import "./detail-card.scss";

const DetailCard = () => {
  return (
    <div className="detail-card">
      <FavoriteBtn />

      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <PostCard
        post={{
          _id: Math.random() * 10,
          title: "npm audit: Broken by Design",
          time: "July 7, 2021",
          content:
            "Security is important. Nobody wants to be the person advocating for less security. So nobody wants to say it. But somebody has to say it.The way npm audit works is broken. Its rollout as a default after every npm install was rushed, inconsiderate, and inadequate for the front-end tooling.",
        }}
      />

      <div className="detail-card-footer">
        <div className="detail-card-footer-user">
          <Avatar />
          <span className="fs-14">Ahmed</span>
        </div>

        <div className="detail-card-footer-icons">
          <div>
            <svg
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87492 3.75C5.09048 3.75 2.83325 6.00725 2.83325 8.79167C2.83325 13.8333 8.79159 18.4167 11.9999 19.4828C15.2083 18.4167 21.1666 13.8333 21.1666 8.79167C21.1666 6.00725 18.9093 3.75 16.1249 3.75C14.4198 3.75 12.9123 4.5965 11.9999 5.89216C11.0875 4.5965 9.58006 3.75 7.87492 3.75Z"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="fs-12">10</span>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20.5C16.9706 20.5 21 16.339 21 13.5C21 10.661 16.9706 6.5 12 6.5C7.02945 6.5 3 10.6639 3 13.5C3 16.3361 7.02945 20.5 12 20.5Z"
                stroke="#454545"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M12 16.5C13.6568 16.5 15 15.1568 15 13.5C15 11.8432 13.6568 10.5 12 10.5C10.3432 10.5 9 11.8432 9 13.5C9 15.1568 10.3432 16.5 12 16.5Z"
                stroke="#454545"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M6.63184 5.63306L7.92909 7.44316"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M17.8124 5.85519L16.5151 7.66534"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12.0044 3.5V6.5"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <span className="fs-12">47</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
