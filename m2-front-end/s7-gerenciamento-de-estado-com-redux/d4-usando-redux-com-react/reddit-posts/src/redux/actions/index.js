import redditAPI from '../../services/redditAPI';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS_WITH_SUCCESS = 'RECEIVE_POSTS_WITH_SUCCESS';
export const RECEIVE_POSTS_WITH_ERROR = 'RECEIVE_POSTS_WITH_ERROR';

const requestPosts = () => ({
  type: REQUEST_POSTS,
});

const receivePostsWithSuccess = (payload) => ({
  type: RECEIVE_POSTS_WITH_SUCCESS,
  payload,
});

const receivePostsWithError = (payload) => ({
  type: RECEIVE_POSTS_WITH_ERROR,
  payload,
});

export const getPosts = (subreddit) => async (dispatch) => {
  dispatch(requestPosts());

  try {
    const response = await redditAPI(subreddit);
    dispatch(receivePostsWithSuccess(response));
  } catch (error) {
    dispatch(receivePostsWithError(error));
  }
};
