import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, setUserInfo } from "../../actions/UserActions";
import { HeaderContainer, HeaderBranding, HeaderLinks } from "./NavStyles";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toHomePage: false
    };

    if (this.props.user) {
      if (!this.props.user.id && localStorage.getItem("token")) {
        this.props.setUserInfo();
      }
    }
  }

  logOut() {
    this.props.logoutUser();
    this.setState({
      toHomePage: true
    });
  }

  render() {
    if (this.state.toHomePage === true) {
      return <Redirect to="/" />;
    }

    return (
      <HeaderContainer>
        <HeaderBranding href="/">
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_list_4boi.svg"
            alt="a man reading a book"
          />
          <h2>mentalnote</h2>
        </HeaderBranding>
        <HeaderLinks>
          {this.props.links.map(link => {
            if (link === "log out") {
              return (
                <li key={link}>
                  <Link onClick={this.logOut.bind(this)} to="#">
                    log out
                  </Link>
                </li>
              );
            } else if (link === "home") {
              return (
                <li key={link}>
                  <Link to="/">home</Link>
                </li>
              );
            } else {
              return (
                <li key={link}>
                  <Link to={`/${link}`}>{link}</Link>
                </li>
              );
            }
          })}
        </HeaderLinks>
      </HeaderContainer>
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
  { logoutUser, setUserInfo }
)(Nav);
