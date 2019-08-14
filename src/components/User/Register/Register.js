import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/UserActions";
import Header from "../../Header/Header";
import { Loading } from "../../Loading/Loading";
import {
  AuthContainer,
  FormContainer,
  FormIcon,
  Form,
  FormTitle,
  FormUser,
  FormSubmitButton,
  SubmitError,
  LoadingContainer
} from "../userStyles";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerUser(this.state).then(() => {
      if (!this.props.user.error) {
        this.setState({
          isLoading: true,
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
            <FormIcon
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/superhero_kguv.svg"
              alt="person diving in the air wearing business clothes"
            />
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
              {this.props.user.error ? (
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
