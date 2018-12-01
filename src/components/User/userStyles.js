import { css } from "react-emotion";
import { colors } from "../../globalStyles";

export const auth__container = css`
  {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100%;
    background-color: ${colors.backgroundLight};
  }
`;

export const form__container = css`
  {
    display: flex;
    justify-content: center;
    height: 500px;
    width: 650px;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(27, 39, 51, 0.25) 0px 10px 20px -8px;
  }

  @media only screen and (max-height: 600px) {
    margin-top: 120px;
  }
`;

export const form__icon = css`
  {
    position: absolute;
    top: -90px;
    width: 150px;
  }

  @media only screen and (max-width: 700px) {
    width: 120px;
    top: -60px;
  }
`;

export const form = css`
  {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px;
  }
`;

export const form__title = css`
  {
    font-size: 24px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

export const form__user = css`
  {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-self: center;
  }

  label {
    text-align: left;
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    border: none;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #f8f8f8;
    margin-bottom: 30px;
    font-size: 14px;
    padding: 5px;
  }
`;

export const form__submit_btn = css`
  {
    height: 45px;
    width: 50%;
    font-size: 16px;
    align-self: center;
    background-color: ${colors.main};
    color: #fff;
    font-weight: bold;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 30px;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;