import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  p {
    font-size: 2rem;
    text-align: center;
  }
  a {
    padding: 15px;
    width: 150px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    align-self: center;
    background-color: ${colors.main};
    color: #fff;
    font-weight: bold;
    border: 1px solid #ddd;
    border-radius: 25px;
    margin-top: 30px;
    cursor: pointer;
    letter-spacing: 1px;
    &:hover {
      background-color: #fff;
      color: #000;
      font-weight: normal;
    }
  }
  @media only screen and (max-width: 420px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const JournalListWrapper = styled.ul`
  width: 25%;
  @media only screen and (max-width: 1024px) {
    display: ${props => (props.expand ? "flex" : "none")};
    min-width: 100vw;
  }
`;
