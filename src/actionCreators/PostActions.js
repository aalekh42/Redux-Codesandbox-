import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from "../constants/actionTypes";
import axios from "axios";

//posts
export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
};

export const addPostsRequest = () => {
  return {
    type: ADD_POST_REQUEST
  };
};

export const addPostsSuccess = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: post
  };
};

export const addPostFailure = (error) => {
  return {
    type: ADD_POST_FAILURE,
    payload: error
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("RESPONSE", response);
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

export const addPosts = (postObj) => {
  return (dispatch) => {
    dispatch(addPostsRequest());
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postObj)
      .then((response) => {
        console.log("response data", response.data);
        dispatch(addPostsSuccess(postObj));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(addPostFailure(error));
      });
  };
};
