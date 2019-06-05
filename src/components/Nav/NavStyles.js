import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const HeaderContainer = styled.nav`
  background-color: ${colors.main};
  color: white;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100vh;
`;

export const HeaderBranding = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  img {
    width: 40px;
    align-self: center;
  }
`;

export const HeaderLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 80px;

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
    width: 40%;
  }

  @media only screen and (max-width: 600px) {
    width: 50%;
    li {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 380px) {
    width: 45%;
    li {
      font-size: 10px;
    }
    li:hover:after {
      height: 3px;
      top: 15px;
    }
  }
`;
