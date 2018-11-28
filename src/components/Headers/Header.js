import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import "./Header.css";
import { connect } from "react-redux";
import { logoutUser } from '../../actions/UserActions';

class Header extends Component {
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
          <a className="header-branding" href="/">
            <img className="header-logo" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_list_4boi.svg" alt="a man reading a book" />
            <h1 className="header-title">mentalnote</h1>
          </a>
        <ul className="header-links">
        {
          this.props.links.map(link => {
            if(link === "log out") {
              return (
                <li key={link} className="header-link">
                  <Link onClick={ this.logOut.bind(this) } className="header-link-ref" to="#">log out</Link>
                </li>
                );
            } else if (link === "home") {
                return (
                  <li key={link} className="header-link">
                    <Link className="header-link-ref" to="/">home</Link>
                  </li>
                  );
              } else {
                return (
                  <li key={link} className="header-link">
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
)(Header);