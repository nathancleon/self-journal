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
          <li className="header-link">
            <Link to="/list">List</Link>
          </li>
          <li className="header-link">
            <Link to="/prompts">Prompts</Link>
          </li>
          <li className="header-link">
            <Link to="/data">Data</Link>
          </li>
          <li className="header-link" onClick={ this.logOut.bind(this) }>
            <Link to="#">Log Out</Link>
          </li>
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