import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import "./Register.css";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/UserActions";
import Header from "../../Headers/Header";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      toDashboard: false
    };
  }

  handleChange(event) {
    let key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerUser(this.state).then(() => {
      this.setState({
        toDashboard: true
      });
    });
  }

  render() {

    if (this.state.toDashboard === true) {
      return <Redirect to='/list' />;
    }

    const linksArray = ["home", "login"];

    return (
      <div>
        <Header links={linksArray} />
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
      </div>
      
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
