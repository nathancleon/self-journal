import styled from "react-emotion";
import { colors } from "../../globalStyles";

export const HeaderContainer = styled("nav")`
   {
    background-color: ${colors.main};
    color: white;
    display: flex;
    height: 8vh;
    justify-content: space-between;
  }
`;

export const HeaderBranding = styled("a")`
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
    font-family: "Nunito", sans-serif;
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

export const HeaderLinks = styled("ul")`
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
    font-family: "Nunito", sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
    font-weight: bold;
  }

  li:hover:after {
    content: "";
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
