import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, hideUsersSuccess } from "../actionCreators/UserActions";
import { withRouter } from "react-router-dom";

class UserContainer extends Component {
  // componentDidMount() {
  //   // const { fetchUsers } = this.props;
  //   this.props.fetchUsers();
  //   console.log("Hello");
  // }
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    };
  }

  // const toggle=()=>{
  //   this.setState({hide:!this.state.hide})
  // }
  render() {
    const { fetchUsers, userData, hideUsersSuccess } = this.props;
    console.log("USERS", userData);
    return userData.loading ? (
      <h2>loading...</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <h2>Users List</h2>
        <button onClick={() => fetchUsers()}>Fetch</button>
        <button onClick={() => hideUsersSuccess()}>Hide</button>
        {userData.users.map((user) => (
          <p>{user.name}</p>
        ))}
        <button
          onClick={() => {
            this.props.history.push("./");
          }}
        >
          LOGOUT
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    hideUsersSuccess: () => dispatch(hideUsersSuccess())
  };
};

// export default UserContainer;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserContainer));
