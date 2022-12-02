import { ALERT_TYPES } from "../types/alertTypes";

const initialState = {
  loading: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
};

export default alertReducer;
