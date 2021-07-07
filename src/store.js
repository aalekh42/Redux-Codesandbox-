import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducer from "./reducers/UserReducer";
import PostReducer from "./reducers/PostReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
// const store=createStore(CardReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
