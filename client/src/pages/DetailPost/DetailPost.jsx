import { DetailCard, PostCard } from "components";
import React from "react";
import { postData } from "utils";
import "./detail-post.scss";

const DetailPost = () => {
  return (
    <div className="detail-post">
      <DetailCard />

      <div className="detail-post-similar">
        {postData.slice(0, 2).map((post, index) => (
          <PostCard key={index} post={post} sctollTop />
        ))}
      </div>
    </div>
  );
};

export default DetailPost;
