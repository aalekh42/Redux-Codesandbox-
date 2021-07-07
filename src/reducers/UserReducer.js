import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  HIDE_USERS_SUCCESS
} from "../constants/actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: ""
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      };
    case HIDE_USERS_SUCCESS:
      return {
        ...state,
        users: []
      };
    default:
      return state;
  }
};

export default UserReducer;
