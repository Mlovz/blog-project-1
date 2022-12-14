import { Heading, PostCard } from "components";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAricles } from "redux/actions/articleAction";
import { postData } from "utils";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(getAricles());
  }, [dispatch]);

  return (
    <div className="home">
      <Heading>Unusual blog</Heading>

      <div className="home-cards">
        {articles.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
