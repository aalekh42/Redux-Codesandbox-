import { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    const validateForm = () => {
      return this.state.username.length > 0 && this.state.password.length > 0;
    };
    return (
      <div class="row">
        <div class="col-6">
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div class="col-6">
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <button
          disabled={!validateForm()}
          onClick={() => {
            this.props.history.push("./users");
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
