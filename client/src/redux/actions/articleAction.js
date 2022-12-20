import { api } from "api";
import { ALERT_TYPES } from "redux/types/alertTypes";
import { ARTICLE_TYPES } from "redux/types/articleTypes";
import { ImageUpload } from "utils/ImageUpload";

export const articleAdd = (data, files, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });
    let media = [];
    if (files) media = await ImageUpload(files);

    const res = await api.post("/api/article", { ...data, images: media });

    if (res.data) {
      dispatch({ type: ARTICLE_TYPES.ADD_ARTICLE, payload: res.data });
      navigate("/");
    }

    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};

export const getAricles = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });
    const res = await api.get("/api/home/articles");

    console.log(res);

    if (res.data) {
      dispatch({
        type: ARTICLE_TYPES.GET_ARTICLES,
        payload: res.data.articles,
      });
    }

    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};

export const getAricle = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });
    const res = await api.get(`/api/article/${id}`);

    if (res.data) {
      dispatch({ type: ARTICLE_TYPES.GET_ARTICLE, payload: res.data });
    }

    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};

export const likeArticle =
  ({ auth, post }) =>
  async (dispatch) => {
    try {
      const newPost = { ...post, likes: [...post.likes, auth.user._id] };

      dispatch({ type: ARTICLE_TYPES.UPDATE_POST, payload: newPost });

      const res = await api.patch(`/api/article/${post._id}/like`);

      console.log(res);
    } catch (err) {}
  };

export const unlikeArticle =
  ({ auth, post }) =>
  async (dispatch) => {
    try {
      const newPost = {
        ...post,
        likes: post.likes.filter((like) => like !== auth.user._id),
      };

      dispatch({ type: ARTICLE_TYPES.UPDATE_POST, payload: newPost });

      const res = await api.patch(`/api/article/${post._id}/unlike`);

      console.log(res);
    } catch (err) {}
  };
