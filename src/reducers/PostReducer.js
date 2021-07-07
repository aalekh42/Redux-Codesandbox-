import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from "../constants/actionTypes";

const InitialState = {
  loading: false,
  posts: [],
  error: ""
};

const PostReducer = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: ""
      };
    case FETCH_POSTS_FAILURE:
      return {
        posts: [],
        loading: false,
        error: action.payload
      };
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ADD_POST_SUCCESS:
      const posts = state.posts.concat(action.payload);
      return {
        ...state,
        posts,
        loading: false
      };
    // case ADD_POST_SUCCESS:
    //   return {
    //     loading: false
    //   };
    case ADD_POST_FAILURE:
      return {
        error: action.payload,
        loading: false,
        posts: []
      };
    default:
      return state;
  }
};

export default PostReducer;
