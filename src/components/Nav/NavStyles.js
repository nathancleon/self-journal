import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const NavContainer = styled.nav`
  position: relative;
  background-color: ${colors.main};
  color: white;
  display: flex;
  flex-direction: column;
  min-width: 80px;
  height: 100%;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavIcon = styled.a`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  &:hover {
    background-color: ${colors.navColor};
  }
  img {
    max-width: 30px;
    height: 30px;
    align-self: center;
  }
`;

export const NavIconActive = styled.a`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  background-color: ${colors.navColor};
  &:before {
    position: absolute;
    content: "";
    width: 5px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
  }
  img {
    max-width: 30px;
    height: 30px;
    align-self: center;
  }
`;
