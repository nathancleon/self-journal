import React, { Component } from "react";
import "./Register.css";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/UserActions";

class Register extends Component {
  handleChange(event) {
    let key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerUser(this.state).then(() => {
      this.props.history.push("/prompts");
    });
  }

  render() {
    return (
      <section className="registration-container">
        <div className="form-container">
          <form className="form">
            <h1 className="form-title">Register</h1>
            <div className="form-user">
              <label className="email-label" htmlFor="email">
                Email
              </label>
              <input
                className="user-email"
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange.bind(this)}
              />
              <label className="password-label" htmlFor="password">
                Password
              </label>
              <input
                className="user-password"
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <button
              className="btn btn-submit"
              type="password"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState);
  return {
    user: reduxState.user
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
