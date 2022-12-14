import { DetailCard, PostCard } from "components";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAricle } from "redux/actions/articleAction";
import { postData } from "utils";
import "./detail-post.scss";

const DetailPost = () => {
  const { blog, articles } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getAricle(id));
    }
  }, [id]);

  return (
    <div className="detail-post">
      {blog && <DetailCard post={blog} />}

      <div className="detail-post-similar">
        {articles.slice(0, 2).map((post, index) => (
          <PostCard key={index} post={post} sctollTop />
        ))}
      </div>
    </div>
  );
};

export default DetailPost;
