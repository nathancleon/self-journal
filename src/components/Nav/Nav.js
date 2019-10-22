import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, setUserInfo } from "../../actions/UserActions";
import { NavContainer, NavIcon, NavLinks, NavIconActive } from "./NavStyles";
import {
  HomeIcon,
  JournalIcon,
  PromptIcon,
  AnalyticsIcon,
  RelationshipsIcon,
  LogOutIcon
} from "../../SvgComponents/NavIcons";

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

  render() {
    return (
      <NavContainer>
        <NavLinks>
          {this.props.currentPath === "home" ? (
            <NavIconActive id="home" title="home">
              <Link to="/dashboard">
                <HomeIcon fill="rgba(255, 255, 255, 1)" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon id="home" title="home">
              <Link to="/dashboard">
                <HomeIcon fill="rgba(255, 255, 255, 0.8)" />
              </Link>
            </NavIcon>
          )}
          {this.props.currentPath === "journals" ? (
            <NavIconActive id="journals" title="journals">
              <Link to="/dashboard/journals">
                <JournalIcon fill="rgba(255, 255, 255, 1)" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon id="journals" title="journal">
              <Link to="/dashboard/journals">
                <JournalIcon fill="rgba(255, 255, 255, 0.8)" />
              </Link>
            </NavIcon>
          )}
          {this.props.currentPath === "analytics" ? (
            <NavIconActive id="analytics" title="analytics">
              <Link to="/dashboard/analytics">
                <AnalyticsIcon fill="rgba(255, 255, 255, 1)" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon id="analytics" title="analytics">
              <Link to="/dashboard/analytics">
                <AnalyticsIcon fill="rgba(255, 255, 255, 0.8)" />
              </Link>
            </NavIcon>
          )}
          {this.props.currentPath === "prompts" ? (
            <NavIconActive id="prompts" title="prompts">
              <Link to="/dashboard/prompts">
                <PromptIcon fill="rgba(255, 255, 255, 1)" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon href="#" id="prompts" title="prompts">
              <Link to="/dashboard/prompts">
                <PromptIcon fill="rgba(255, 255, 255, 0.8)" />
              </Link>
            </NavIcon>
          )}
          <NavIcon onClick={this.logOut.bind(this)} title="log out">
            <Link to="/">
              <LogOutIcon fill="rgba(255, 255, 255, 1)" />
            </Link>
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
