import { Component } from "react";
import { fetchPosts, addPosts } from "../actionCreators/PostActions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class PostContainer extends Component {
  render() {
    const postObj = {
      title: "foo",
      body: "bar",
      userId: 2
    };
    const { fetchPosts, postData, addPosts } = this.props;
    console.log("POST", postData);
    return (
      <div>
        <h2>List of Posts:</h2>
        <button onClick={() => fetchPosts()}>Fetch </button>
        <button onClick={() => addPosts(postObj)}>Add </button>
        {postData.loading ? (
          <h2>Posts Loading...</h2>
        ) : postData.error ? (
          <h2>{postData.error}</h2>
        ) : (
          <h2>
            {postData.posts.map((post) => (
              <p>{post.title}</p>
            ))}
          </h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state.post
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    addPosts: (postObj) => dispatch(addPosts(postObj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostContainer));
