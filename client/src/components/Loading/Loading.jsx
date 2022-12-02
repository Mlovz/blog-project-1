import React from "react";
import "./loading.scss";
import { useSelector } from "react-redux";

// import { selectGlobalLoading } from "pages/Auth/Login/AuthSlice";

const Loading = () => {
  const { loading } = useSelector((state) => state.alert);

  if (!loading) {
    return;
  }
  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading_box">
            <div className="spinner">
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
