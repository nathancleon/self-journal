import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser, setUserInfo } from '../../actions/UserActions';
import styled from "react-emotion";
import { colors } from "../../globalStyles";

const HeaderContainer = styled("nav")` 
  {
    background-color: ${colors.main};
    color: white;
    display: flex;
    height: 8vh;
    justify-content: space-between;
  }
`;

const HeaderBranding = styled("a")`
  {
    display: flex;
    width: 20%;
    margin-left: 25px;
    text-decoration: none;
    color: #fff;
  }
  img {
    width: 40px;
    align-self: center;
  }
  h2 {
    margin-left: 5px;
    align-self: center;
    font-family: 'Nunito', sans-serif;
    font-size: 32px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 18px;
    }
  }

   @media only screen and (max-width: 380px) {
     {
       margin-left: 10px;
     }
    img {
      width: 25px;
    }
    h2 {
      font-size: 16px;
    }
  }
`;

const HeaderLinks = styled("ul")`
  {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5px;
    width: 25%;
  }

  li {
    flex-direction: row;
    position: relative;
    list-style: none;
    font-size: 18px;
    align-self: center;
  }

  li a {
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
    font-weight: bold;
  }

  li:hover:after {
    content: '';
    position: absolute;
    top: 27px;
    left: 0px;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }

  @media only screen and (max-width: 1200px) {
    {
      width: 40%;
    }
    
  }

  @media only screen and (max-width: 600px) {
    {
      width: 50%;
    }
    li {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 380px) {
    {
      width: 45%;
    }
    li {
      font-size: 10px;
    }
    li:hover:after {
      height: 3px;
      top: 15px;
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toHomePage: false
    };

    if (this.props.user) {
      if (!this.props.user.id && localStorage.getItem('token')) {
        console.log('setUser ran');
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
      return <Redirect to='/' />;
    }

    return (
      <HeaderContainer>
          <HeaderBranding href="/">
            <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_list_4boi.svg" alt="a man reading a book" />
            <h2>mentalnote</h2>
          </HeaderBranding>
        <HeaderLinks>
        {
          this.props.links.map(link => {
            if(link === "log out") {
              return (
                <li key={link}>
                  <Link onClick={ this.logOut.bind(this) } to="#">log out</Link>
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
          })
        }
        </HeaderLinks>
      </HeaderContainer>
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
  { logoutUser, setUserInfo }
)(Header);