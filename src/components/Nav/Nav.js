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

    this.state = {
      active: null
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

  setToActive(event) {
    this.setState({
      active: event.currentTarget.id
    });

    this.props.selectComponent(event.currentTarget.id);
  }

  render() {
    return (
      <NavContainer>
        <NavLinks>
          {this.state.active === "home" ? (
            <NavIconActive href="#" id="home">
              <img src={HomeIcon} alt="home" />
            </NavIconActive>
          ) : (
            <NavIcon onClick={this.setToActive.bind(this)} href="#" id="home">
              <img src={HomeIcon} alt="home" />
            </NavIcon>
          )}
          {this.state.active === "journal" ? (
            <NavIconActive href="#" id="journal">
              <img src={JournalIcon} alt="journal" />
            </NavIconActive>
          ) : (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              href="#"
              id="journal"
            >
              <img src={JournalIcon} alt="journal" id="journal" />
            </NavIcon>
          )}
          {this.state.active === "prompts" ? (
            <NavIconActive href="#" id="prompts">
              <img src={PromptsIcon} alt="prompts" />
            </NavIconActive>
          ) : (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              href="#"
              id="prompts"
            >
              <img src={PromptsIcon} alt="prompts" />
            </NavIcon>
          )}
          {this.state.active === "analytics" ? (
            <NavIconActive href="#" id="analytics">
              <img src={AnalyticsIcon} alt="analytics" />
            </NavIconActive>
          ) : (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              href="#"
              id="analytics"
            >
              <img src={AnalyticsIcon} alt="analytics" />
            </NavIcon>
          )}
          <NavIcon onClick={this.logOut.bind(this)} href="/">
            <img src={LogOutIcon} alt="log out" />
          </NavIcon>
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
