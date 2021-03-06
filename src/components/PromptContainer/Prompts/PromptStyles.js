import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 420px;
  width: 650px;
  margin-top: 80px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  @media only screen and (max-width: 1024px) {
    margin-top: 40px;
    img {
      top: -45px;
      width: 120px;
    }
  }
`;

export const Icon = styled.img`
   {
    position: absolute;
    top: -60px;
    width: 120px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;
  height: 100%;
`;

export const FormQuestion = styled.h2`
  color: ${colors.backgroundDark};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export const FormOptions = styled.ul`
  display: inline-block;
  margin: 0 auto;
`;

export const FormOption = styled.li`
  position: relative;
  display: inline-block;
  font-size: 14px;
  border: 1px solid #ddd;
  border-right: 0px;
  &:first-child {
    border-left: 1px solid #ddd;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-right: 1px solid #ddd;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  label {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 10px 15px;
  }
  &:first-child label {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child label {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const OptionInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  &:checked + label {
    background-color: ${colors.mainLight};
  }
`;

export const FormTextField = styled.textarea`
  min-height: 150px;
  max-height: 150px;
  min-width: 100%;
  max-width: 100%;
  margin-top: 40px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 16px;
`;

export const NextButton = styled.button`
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

export const AnswerError = styled.p`
  color: rgb(220, 80, 80);
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: -20px;
  align-self: center;
`;
