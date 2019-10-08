import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";
export const JournalSelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  max-height: 100%;
  overflow-x: hidden;
  transform: ${props => (props.expand ? "translateX(1000px)" : "none")};
`;
export const NoJournalEntries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 90%;
  p {
    font-size: 1rem;
    text-align: center;
  }
  a {
    padding: 15px;
    width: 50%;
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
`;
