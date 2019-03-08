import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { loginUser } from "../../../actions/UserActions";
import Header from "../../Headers/Header";
import { 
  auth__container, 
  form__container,
  form__icon, 
  form, 
  form__title, 
  form__user, 
  form__submit_btn,
  submit__error
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

    this.emailAndPasswordValidation =  this.emailAndPasswordValidation.bind(this);
  }

  handleChange(event) {
    let key = event.target.name;
    this.setState({
      [key]: event.target.value
    });
  }

  emailAndPasswordValidation() {
    if(this.state.email === "") {
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
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this._isMounted) {
      this.emailAndPasswordValidation();
    }

  }

  componentDidMount() {
    this._isMounted = true;
    let emailVal = document.getElementById('email').value;
    let passwordVal = document.getElementById('password').value;
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
      return <Redirect to='/prompts' />;
    }
    const linksArray = ["home", "register"];

    return (
      <div>
        <Header links={linksArray} />
      <section className={auth__container}>
        <div className={form__container}>
          <img className={form__icon} src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/instant_support_elxh.svg"
            alt="person diving in the air wearing business clothes" />
          <form className={form}>
            <h1 className={form__title}>Login</h1>
            <div className={form__user}>
              <label htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue="user@gmail.com"
                onChange={this.handleChange.bind(this)}
              />
              <label htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                defaultValue="password123"
                onChange={this.handleChange.bind(this)}
              />
            </div>

            {
              this.state.emailError ? 
              <p className={submit__error}>You must enter an email</p>:
              this.state.passwordError ? 
              <p className={submit__error}>You must enter a password</p>:
              this.props.user.error ? 
              <p className={submit__error}>{this.props.user.error}</p>:
              null
            }
            <button
              className={form__submit_btn}
              type="submit"
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
  return {
    user: reduxState.user
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
