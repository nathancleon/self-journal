import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { registerUser } from "../../../actions/UserActions";
import Header from "../../Headers/Header";
import { 
  auth__container, 
  form__container,
  form__icon,  
  form, 
  form__title, 
  form__user, 
  form__submit_btn
} from "../userStyles";

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
      return <Redirect to='/prompts' />;
    }

    const linksArray = ["home", "login"];

    return (
      <div>
        <Header links={linksArray} />
        <section className={auth__container}>
          <div className={form__container}>
            <img className={form__icon} src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/superhero_kguv.svg"
                alt="person diving in the air wearing business clothes" />
            <form className={form}>
              <h1 className={form__title}>Register</h1>
              <div className={form__user}>
                <label htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange.bind(this)}
                />
                <label htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <button
                className={form__submit_btn}
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
