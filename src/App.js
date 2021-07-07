import "./styles.css";
import UserContainer from "./components/UserContainter";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PostContainer from "./components/PostContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <Router>
          <Route exact path="/" component={() => <Login />} />
          <Route path="/users" component={() => <UserContainer />} />
          <Route path="/posts" component={() => <PostContainer />} />
        </Router>
      </div>
    </Provider>
  );
}
