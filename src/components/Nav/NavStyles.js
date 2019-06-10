import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const NavContainer = styled.nav`
  position: relative;
  background-color: ${colors.main};
  color: white;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  max-width: 80px;
  min-height: 100%;
`;

export const NavLinks = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const NavIcon = styled.li`
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
`;

export const NavIconActive = styled.li`
  position: relative;
  width: 100%;
  height: 80px;
  text-decoration: none;
  color: #fff;
  background-color: ${colors.navColor};
  cursor: pointer;
  &:before {
    position: absolute;
    content: "";
    width: 5px;
    height: 100%;
    top: 0;
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
`;
