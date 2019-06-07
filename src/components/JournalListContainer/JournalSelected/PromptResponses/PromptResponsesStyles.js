import styled from "@emotion/styled";
import { colors } from "../../../../globalStyles";

export const SelectedPromptContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px 50px;
`;

export const SelectedPromptHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  position: relative;
  height: 50px;
  margin-bottom: 20px;
  h1 {
    font-size: 2rem;
    color: ${colors.backgroundDark};
    height: 50px;
    padding-top: 15px;
    margin-bottom: 15px;
    span {
      margin-left: 45px;
      font-size: 1.5rem;
      font-weight: normal;
      color: #888;
    }
  }
`;

export const PromptIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80px;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 2rem;
  svg {
    width: 25px;
    cursor: pointer;
    margin-bottom: 2px;
  }
  svg:first-child {
    fill: #5b5b5b;
    margin-right: 20px;
  }
  svg:nth-child(2) {
    fill: #5b5b5b;
    width: 22px;
  }
`;

export const SelectedPromptData = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 10px;
  overflow-y: scroll;
  h4 {
    color: ${colors.backgroundDark};
    margin-top: 20px;
  }
`;

export const UserAnswers = styled.div`
  display: flex;
  p {
    font-size: 16px;
    color: #555;
    text-align: left;
    margin-right: 8px;
    margin-top: 5px;
    margin-bottom: 2px;
  }
  select {
    margin-top: 5px;
    margin-bottom: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fafafa;
    font-size: 14px;
  }
`;

export const UserTextAnswers = styled.div`
  p {
    font-size: 16px;
    color: #555;
  }
  textarea {
    font-size: 16px;
    width: 100%;
    border: 1px solid #ddd;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const SubmitButton = styled.button`
  min-height: 45px;
  width: 50%;
  font-size: 16px;
  align-self: center;
  background-color: ${colors.main};
  color: #fff;
  font-weight: bold;
  border: 1px solid #ddd;
  border-radius: 25px;
  margin-top: 20px;
  margin-bottom: 0px;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;

export const NavigateLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  background-color: #f8f8f8;
  img {
    width: 40%;
  }
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const NavigateRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
  background-color: #f8f8f8;
  img {
    width: 40%;
  }
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const NavigationDisabled = styled.div`
  width: 10%;
  height: 100%;
`;
