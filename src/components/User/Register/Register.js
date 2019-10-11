import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/UserActions";
import Header from "../../Header/Header";
import { Loading } from "../../Loading/Loading";
import {
  AuthContainer,
  FormContainer,
  Form,
  FormTitle,
  FormUser,
  FormSubmitButton,
  SubmitError,
  LoadingContainer
} from "../userStyles";
import { RegisterIcon } from "../../../SvgComponents/AuthIcons";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailError: false,
      passwordError: false,
      passwordLengthError: false,
      toDashboard: false,
      isLoading: false
    };
  }

  handleChange(event) {
    let key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
  }

  emailAndPasswordValidation() {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(String(this.state.email).toLowerCase()) === false) {
      this.setState({
        emailError: true
      });
    } else if (this.state.email === "") {
      this.setState({
        emailError: true
      });
    } else if (this.state.password === "") {
      this.setState({
        emailError: false,
        passwordError: true
      });
    } else if (this.state.password.length < 6) {
      this.setState({
        emailError: false,
        passwordError: false,
        passwordLengthError: true
      });
    } else {
      this.setState({
        emailError: false,
        passwordError: false,
        passwordLengthError: false,
        isLoading: true
      });
    }
  }

  handleSubmit(event) {
    console.log("this ran");
    event.preventDefault();
    this.emailAndPasswordValidation();

    this.props.registerUser(this.state).then(() => {
      if (
        this.state.emailError === false &&
        this.state.passwordError === false &&
        this.state.passwordLengthError === false
      ) {
        this.setState({
          isLoading: false,
          toDashboard: true
        });
      }
    });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }

    const linksArray = ["home", "login"];

    return (
      <div>
        <Header links={linksArray} />
        <AuthContainer>
          <FormContainer>
            <RegisterIcon />
            <Form>
              <FormTitle>Register</FormTitle>
              <FormUser>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange.bind(this)}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange.bind(this)}
                />
              </FormUser>
              {this.state.emailError ? (
                <SubmitError>You must enter a valid email</SubmitError>
              ) : this.state.passwordError ? (
                <SubmitError>You must enter a password</SubmitError>
              ) : this.state.passwordLengthError ? (
                <SubmitError>
                  Password must be more than 6 characters
                </SubmitError>
              ) : this.props.user.error ? (
                <SubmitError>{this.props.user.error}</SubmitError>
              ) : null}
              <FormSubmitButton
                type="password"
                onClick={this.handleSubmit.bind(this)}
              >
                Submit
              </FormSubmitButton>
            </Form>
            <LoadingContainer>
              {this.state.isLoading ? <Loading slow /> : null}
            </LoadingContainer>
          </FormContainer>
        </AuthContainer>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
