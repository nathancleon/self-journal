import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";

export const PromptSubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 650px;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  padding: 50px;
  margin-top: 70px;
`;
export const PromptSubmitImage = styled.img`
  position: absolute;
  top: -50px;
  left: 35%;
  width: 200px;
`;
export const PromptSubmitText = styled.h2`
  font-size: 24px;
  text-align: center;
  width: 100%;
  line-height: 50px;
  margin-top: 40px;
`;
export const PromptSubmitButton = styled.button`
  height: 45px;
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
