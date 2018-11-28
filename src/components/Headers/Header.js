import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from '../../actions/UserActions';
import styled from "react-emotion";


const HeaderContainer = styled("div")` 
  {
    background-color: rgba(58, 94, 255, 0.65);
    color: white;
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding-top: 10px;
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
    margin-top: -20px;
  }
  h1 {
    margin-left: 5px;
    margin-top: 5px;
    font-family: 'Nunito', sans-serif;
  }

  @media only screen and (max-width: 600px) {
    img {
      margin-top: -22px;
    }
    h1 {
      font-size: 18px;
      margin-top: 15px;
    }
  }

   @media only screen and (max-width: 380px) {
     {
       margin-left: 10px;
     }
    img {
      width: 25px;
      margin-top: -10px;
    }
    h1 {
      font-size: 16px;
      margin-top: 20px;
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
    list-style: none;
    font-size: 18px;
    margin-top: 12px;
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
      margin-top: 15px;
    }
  }

  @media only screen and (max-width: 380px) {
    {
      width: 45%;
    }
    li {
      font-size: 10px;
      margin-top: 20px;
    }
  }
`;

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
      <HeaderContainer>
          <HeaderBranding href="/">
            <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/reading_list_4boi.svg" alt="a man reading a book" />
            <h1>mentalnote</h1>
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
  { logoutUser }
)(Header);