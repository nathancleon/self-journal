import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/UserActions";
import Header from "../../Headers/Header";
import {
  AuthContainer,
  FormContainer,
  FormIcon,
  Form,
  FormTitle,
  FormUser,
  FormSubmitButton,
  SubmitError
} from "../userStyles";

class Login extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      toDashboard: false,
      emailError: false,
      passwordError: false
    };

    this.emailAndPasswordValidation = this.emailAndPasswordValidation.bind(
      this
    );
  }

  handleChange(event) {
    let key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
  }

  emailAndPasswordValidation() {
    if (this.state.email === "") {
      this.setState({
        emailError: true,
        passwordError: false
      });
    } else if (this.state.password === "") {
      this.setState({
        emailError: false,
        passwordError: true
      });
    } else if (this.state.email !== "" && this.state.password !== "") {
      this.setState({
        emailError: false,
        passwordError: false
      });
      this.props.loginUser(this.state).then(() => {
        if (!this._isMounted) {
          return;
        } else if (!this.props.user.error) {
          this.setState({
            toDashboard: true
          });
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let count = 0;
    count++;
    if (count > 1) {
      return;
    }
    if (this._isMounted) {
      this.emailAndPasswordValidation();
    }
  }

  componentDidMount() {
    this._isMounted = true;
    let emailVal = document.getElementById("email").value;
    let passwordVal = document.getElementById("password").value;
    this.setState({
      email: emailVal,
      password: passwordVal
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    const linksArray = ["home", "register"];

    return (
      <div>
        <Header links={linksArray} />
        <AuthContainer>
          <FormContainer>
            <FormIcon
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/instant_support_elxh.svg"
              alt="person diving in the air wearing business clothes"
            />
            <Form>
              <FormTitle>Login</FormTitle>
              <FormUser>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue="user@gmail.com"
                  onChange={this.handleChange.bind(this)}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue="password123"
                  onChange={this.handleChange.bind(this)}
                />
              </FormUser>

              {this.state.emailError ? (
                <SubmitError>You must enter an email</SubmitError>
              ) : this.state.passwordError ? (
                <SubmitError>You must enter a password</SubmitError>
              ) : this.props.user.error ? (
                <SubmitError>{this.props.user.error}</SubmitError>
              ) : null}
              <FormSubmitButton
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              >
                Submit
              </FormSubmitButton>
            </Form>
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
  { loginUser }
)(Login);
