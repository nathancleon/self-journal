import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser, setUserInfo } from "../../actions/UserActions";
import { NavContainer, NavIcon, NavLinks, NavIconActive } from "./NavStyles";
import HomeIcon from "../../Assets/home.svg";
import JournalIcon from "../../Assets/book.svg";
import PromptsIcon from "../../Assets/pencil.svg";
import AnalyticsIcon from "../../Assets/analytics.svg";
import LogOutIcon from "../../Assets/sign-out.svg";

class Nav extends Component {
  constructor(props) {
    super(props);

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
    return (
      <NavContainer>
        <NavLinks>
          {this.props.active === "home" ? (
            <NavIconActive href="/">
              <img src={HomeIcon} alt="home" />
            </NavIconActive>
          ) : (
            <NavIcon href="/">
              <img src={HomeIcon} alt="home" />
            </NavIcon>
          )}
          {this.props.active === "journal" ? (
            <NavIconActive href="/list">
              <img src={JournalIcon} alt="journal" />
            </NavIconActive>
          ) : (
            <NavIcon href="/list">
              <img src={JournalIcon} alt="journal" />
            </NavIcon>
          )}
          {this.props.active === "prompts" ? (
            <NavIconActive href="/prompts">
              <img src={PromptsIcon} alt="prompts" />
            </NavIconActive>
          ) : (
            <NavIcon href="/prompts">
              <img src={PromptsIcon} alt="prompts" />
            </NavIcon>
          )}
          {this.props.active === "analytics" ? (
            <NavIconActive href="#">
              <img src={AnalyticsIcon} alt="analytics" />
            </NavIconActive>
          ) : (
            <NavIcon href="#">
              <img src={AnalyticsIcon} alt="analytics" />
            </NavIcon>
          )}
          {this.props.active === "analytics" ? (
            <NavIconActive onClick={this.logOut.bind(this)} href="/">
              <img src={LogOutIcon} alt="log out" />
            </NavIconActive>
          ) : (
            <NavIcon onClick={this.logOut.bind(this)} href="/">
              <img src={LogOutIcon} alt="log out" />
            </NavIcon>
          )}
        </NavLinks>
      </NavContainer>
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
