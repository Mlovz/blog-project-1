import { AUTH_TYPES } from "../types/authTypes";

const initialState = {
  user: {},
  token: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default authReducer;
