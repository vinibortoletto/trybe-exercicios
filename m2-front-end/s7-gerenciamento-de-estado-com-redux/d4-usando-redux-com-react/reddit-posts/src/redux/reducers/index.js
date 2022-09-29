import {
  REQUEST_POSTS,
  RECEIVE_POSTS_WITH_SUCCESS,
  RECEIVE_POSTS_WITH_ERROR,
} from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  posts: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return { ...state, isLoading: true };
    case RECEIVE_POSTS_WITH_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        isLoading: false,
      };
    case RECEIVE_POSTS_WITH_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
