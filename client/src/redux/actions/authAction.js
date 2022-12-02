import { ALERT_TYPES } from "redux/types/alertTypes";
import { AUTH_TYPES } from "redux/types/authTypes";
import { api } from "api";

export const login = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

    const res = await api.post("/api/login", userData);

    console.log(res);

    if (res) {
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: res.data.user,
          token: res.data.access_token,
        },
      });
      navigate("/");
      localStorage.setItem("token", res.data.access_token);
    }

    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};

export const refreshLogin = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

      const res = await api.get("/api/refresh_token");
      if (res) {
        dispatch({
          type: AUTH_TYPES.AUTH,
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });
      }
      console.log(res);
      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
    } catch (err) {
      console.log(err);
      dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
    }
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

    const res = await api.get("/api/logout");

    if (res) {
      dispatch({
        type: AUTH_TYPES.AUTH,
        payload: {
          user: {},
          token: "",
        },
      });
    }

    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};

export const register = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: true } });

    const res = await api.post("/api/register", userData);

    console.log(res);

    if (res.data) {
      navigate("/login");
    }

    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  } catch (err) {
    console.log(err);
    dispatch({ type: ALERT_TYPES.LOADING, payload: { loading: false } });
  }
};
