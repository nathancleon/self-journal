import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

  render() {
    return (
      <NavContainer>
        <NavLinks>
          {this.props.currentPath === "home" ? (
            <NavIconActive id="home" title="home">
              <Link to="/dashboard">
                <img src={HomeIcon} alt="home" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon id="home" title="home">
              <Link to="/dashboard">
                <img src={HomeIcon} alt="home" />
              </Link>
            </NavIcon>
          )}
          {this.props.currentPath === "journals" ? (
            <NavIconActive id="journals" title="journals">
              <Link to="/dashboard/journals">
                <img src={JournalIcon} alt="journal" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon id="journals" title="journal">
              <Link to="/dashboard/journals">
                <img src={JournalIcon} alt="journal" id="journal" />
              </Link>
            </NavIcon>
          )}
          {this.props.currentPath === "prompts" ? (
            <NavIconActive id="prompts" title="prompts">
              <Link to="/dashboard/prompts">
                <img src={PromptsIcon} alt="prompts" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon href="#" id="prompts" title="prompts">
              <Link to="/dashboard/prompts">
                <img src={PromptsIcon} alt="prompts" />
              </Link>
            </NavIcon>
          )}
          {this.props.currentPath === "analytics" ? (
            <NavIconActive id="analytics" title="analytics">
              <Link to="/dashboard/analytics">
                <img src={AnalyticsIcon} alt="analytics" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon id="analytics" title="analytics">
              <Link to="/dashboard/analytics">
                <img src={AnalyticsIcon} alt="analytics" />
              </Link>
            </NavIcon>
          )}
          <NavIcon onClick={this.logOut.bind(this)} title="log out">
            <Link to="/">
              <img src={LogOutIcon} alt="log out" />
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
