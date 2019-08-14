import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const NavContainer = styled.nav`
  position: relative;
  background-color: ${colors.main};
  color: white;
  min-width: 60px;
  max-width: 60px;
  min-height: 100%;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    height: 60px;
    min-height: 60px;
    min-width: 100%;
    order: 4;
  }
`;

export const NavLinks = styled.ul`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    min-width: 100%;
  }
`;

export const NavIcon = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${colors.navColor};
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
  img {
    max-width: 30px;
    height: 30px;
    align-self: center;
  }
  @media only screen and (max-width: 1024px) {
    height: 60px;
    a {
      height: 60px;
    }
  }
`;

export const NavIconActive = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  text-decoration: none;
  color: #fff;
  background-color: ${colors.navColor};
  cursor: pointer;
  &:after {
    position: absolute;
    content: "";
    width: 3px;
    height: 100%;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  img {
    max-width: 30px;
    height: 30px;
    align-self: center;
  }

  @media only screen and (max-width: 1024px) {
    height: 60px;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 5px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      z-index: 500;
    }
  }
`;
