import { ARTICLE_TYPES } from "../types/articleTypes";

const intitalState = {
  articles: [],
  blog: null,
};

const articleReducer = (state = intitalState, action) => {
  switch (action.type) {
    case ARTICLE_TYPES.ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles],
      };
    case ARTICLE_TYPES.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload.reverse(),
      };

    case ARTICLE_TYPES.GET_ARTICLE:
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
