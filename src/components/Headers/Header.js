import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from '../../actions/UserActions';

class DashboardHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toHomePage: false
    };
  }

  logOut() {
    this.props.logoutUser();
    this.setState({
      toHomePage: true
    });
  }

  render() {

    if (this.state.toHomePage === true) {
      return <Redirect to='/' />;
    }

    return (
      <header>
        <h1 className="header-title">Self-Journal</h1>
        <ul className="header-links">
        {
          this.props.links.map(link => {
            if(link === "log out") {
              return (
                <li className="header-link">
                  <Link onClick={ this.logOut.bind(this) } className="header-link-ref" to="#">log out</Link>
                </li>
                );
            } else if (link === "home") {
                return (
                  <li className="header-link">
                    <Link className="header-link-ref" to="/">home</Link>
                  </li>
                  );
              } else {
                return (
                  <li className="header-link">
                    <Link className="header-link-ref" to={`/${link}`}>{link}</Link>
                  </li>
                  );
              }
          })
        }
        </ul>
      </header>
    );
  };
}

const mapStateToProps = reduxState => {
  console.log(reduxState.user.user.token);
  return {
    user: reduxState.user
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(DashboardHeader);