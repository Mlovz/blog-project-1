import { Heading, PostCard } from "components";
import React from "react";
import { postData } from "utils";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Heading>Unusual blog</Heading>

      <div className="home-cards">
        {postData.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
