import { Heading } from "components";
import React from "react";
import "./post-card.scss";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, sctollTop }) => {
  const navigate = useNavigate();

  const onCLick = () => {
    if (sctollTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    navigate(`/post/${post._id}`);
  };

  return (
    <div className="post-card" onClick={onCLick}>
      <Heading>{post.title}</Heading>
      <span className="fs-12">{post.time}</span>
      <p className="fs-16">{post.content}</p>

      <div className="post-card-dots">
        <svg
          className=""
          width="20"
          height="5"
          viewBox="0 0 20 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 2.5C15 1.83696 15.2634 1.20107 15.7322 0.732234C16.2011 0.263393 16.837 0 17.5 0C18.163 0 18.7989 0.263393 19.2678 0.732234C19.7366 1.20107 20 1.83696 20 2.5C20 3.16304 19.7366 3.79893 19.2678 4.26777C18.7989 4.73661 18.163 5 17.5 5C16.837 5 16.2011 4.73661 15.7322 4.26777C15.2634 3.79893 15 3.16304 15 2.5ZM7.5 2.5C7.5 1.83696 7.76339 1.20107 8.23223 0.732234C8.70107 0.263393 9.33696 0 10 0C10.663 0 11.2989 0.263393 11.7678 0.732234C12.2366 1.20107 12.5 1.83696 12.5 2.5C12.5 3.16304 12.2366 3.79893 11.7678 4.26777C11.2989 4.73661 10.663 5 10 5C9.33696 5 8.70107 4.73661 8.23223 4.26777C7.76339 3.79893 7.5 3.16304 7.5 2.5ZM0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732234C1.20107 0.263393 1.83696 0 2.5 0C3.16304 0 3.79893 0.263393 4.26777 0.732234C4.73661 1.20107 5 1.83696 5 2.5C5 3.16304 4.73661 3.79893 4.26777 4.26777C3.79893 4.73661 3.16304 5 2.5 5C1.83696 5 1.20107 4.73661 0.732233 4.26777C0.263392 3.79893 0 3.16304 0 2.5V2.5Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default PostCard;
