import React from "react";
import { connect } from "react-redux";
import { FetchUserInfo, FetchAuthUser } from "../../actions/UserActions";

class User extends React.Component {
  handleFetchUser() {
    this.props.FetchUserInfo();
  }

  handleFetchAuthUser() {
    this.props.FetchAuthUser();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleFetchUser.bind(this)}>
          Fetch User Info
        </button>
        <button>Fetch Auth User Info</button>
        <h1>Something</h1>
        <p>{this.props.user.name}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { FetchUserInfo, FetchAuthUser }
)(User);
