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
      active: null,
      currentPath: null
    };

    if (this.props.user) {
      if (!this.props.user.id && localStorage.getItem("token")) {
        this.props.setUserInfo();
      }
    }
  }

  getPath() {
    let url = window.location.href;
    let path;
    let getPosition = (string, element, occurrence) => {
      let position = string.split(element, occurrence).join(element).length;
      path = string.slice(position, string.length);
    };

    getPosition(url, "/", 4);

    return path;
  }

  componentDidMount() {
    this.setState({
      currentPath: this.getPath()
    });

    console.log(this.state.currentPath);
  }

  logOut() {
    this.props.logoutUser();
    this.setState({
      toHomePage: true
    });
  }

  setToActive(event) {
    this.setState({
      currentPath: this.getPath()
    });
  }

  render() {
    return (
      <NavContainer>
        <NavLinks>
          {this.state.currentPath === "" ? (
            <NavIconActive id="home" title="home">
              <Link to="/dashboard">
                <img src={HomeIcon} alt="home" />
              </Link>
            </NavIconActive>
          ) : this.state.currentPath !== "" ? (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              id="home"
              title="home"
            >
              <Link to="/dashboard">
                <img src={HomeIcon} alt="home" />
              </Link>
            </NavIcon>
          ) : (
            <NavIconActive id="home" title="home">
              <Link to="/dashboard">
                <img src={HomeIcon} alt="home" />
              </Link>
            </NavIconActive>
          )}
          {this.state.currentPath === "/journals" ? (
            <NavIconActive id="journals" title="journals">
              <Link to="/dashboard/journals">
                <img src={JournalIcon} alt="journal" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              id="journals"
              title="journal"
            >
              <Link to="/dashboard/journals">
                <img src={JournalIcon} alt="journal" id="journal" />
              </Link>
            </NavIcon>
          )}
          {this.state.currentPath === "/prompts" ? (
            <NavIconActive id="prompts" title="prompts">
              <Link to="/dashboard/prompts">
                <img src={PromptsIcon} alt="prompts" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              href="#"
              id="prompts"
              title="prompts"
            >
              <Link to="/dashboard/prompts">
                <img src={PromptsIcon} alt="prompts" />
              </Link>
            </NavIcon>
          )}
          {this.state.currentPath === "/analytics" ? (
            <NavIconActive id="analytics" title="analytics">
              <Link to="/dashboard/analytics">
                <img src={AnalyticsIcon} alt="analytics" />
              </Link>
            </NavIconActive>
          ) : (
            <NavIcon
              onClick={this.setToActive.bind(this)}
              id="analytics"
              title="analytics"
            >
              <Link to="/dashboard/analytics">
                <img src={AnalyticsIcon} alt="analytics" />
              </Link>
            </NavIcon>
          )}
          <NavIcon onClick={this.logOut.bind(this)} href="/" title="log out">
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
