import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  HIDE_USERS_SUCCESS
} from "../constants/actionTypes";
import axios from "axios";

//user
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

export const hideUsersSuccess = () => {
  return {
    type: HIDE_USERS_SUCCESS
  };
};

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         console.log("USERS>>>", response.data);
//         //response.data is the data
//         dispatch(fetchUsersSuccess(response.data));
//       })
//       .catch((error) => {
//         console.log("ERROR>>", error.message);
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response from fetch get", data);
        dispatch(fetchUsersSuccess(data));
      })
      .catch((error) => {
        console.log("Fetch get error", error);
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
