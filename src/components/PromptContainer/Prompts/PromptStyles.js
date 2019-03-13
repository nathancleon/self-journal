import { css } from "react-emotion";
import { colors } from "../../../globalStyles";

export const prompt = css`
  {
    display: flex;
    justify-content: center;
    height: 540px;
    width: 650px;
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(27, 39, 51, 0.25) 0px 10px 20px -8px;
  }

  @media only screen and (max-width: 600px) {
    {
      width: 100%;
      margin-top: 40px;
    }

    img {
      top: -50px;
      width: 120px;
    }
  }

  @media only screen and (max-width: 640px) {
    {
      height: 80vh;
      margin-top: 0px;
    }
    img {
      width: 80px;
      top: 10px;
    }
  }

  @media only screen and (max-width: 440px) {
    {
      width: 98%;
      margin-top: 20px;
      padding: 15px;
    }
    img {
      width: 150px;
      top: -4vh;
    }
  }

  @media only screen and (max-width: 320px) {
    {
      width: 98%;
      padding: 15px;
      margin-top: 50px;
    }

    img {
      width: 100px;
      top: -3vh;
    }
  }
`;

export const prompt__icon = css`
  {
    position: absolute;
    top: -8vh;
    width: 150px;
  }
`;

export const prompt__form_container = css`
  {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    {
      width: 100%;
    }

    h2 {
      font-size: 18px;
    }

    ul li label {
      padding: 5px 10px;
    }
  }

  @media only screen and (max-width: 440px) {
    ul li label {
      font-size: 14px;
      padding: 8px 8px;
    }
  }

  @media only screen and (max-width: 320px) {
    ul li label {
      font-size: 12px;
      padding: 5px 5px;
    }
  }

  @media only screen and (max-height: 840px) {
  h2 {
    margin-bottom: 45px;
  }
  textarea {
    height: 100px;
  }
}
`;

export const form__question = css`
  {
    font-size: 24px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const form__options = css`
  {
    display: inline-block;
    margin: 0 auto;
  }
`;

export const form__option = css`
  {
    position: relative;
    display: inline-block;
    border: 1px solid #ddd;
    border-right: 0px;
  }
  &:first-child{
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

export const form__option_input = css`
  {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
  &:checked + label {
    background-color: ${colors.mainLight};
  }
`;

export const form__text_field = css`
  {
    max-height: 200px;
    height: 200px;
    margin-top: 40px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 2px;
    font-size: 16px;
  }
`;

export const form__next_btn = css`
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
    margin-bottom: 30px;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;

export const answer__error = css`
  {
    color: rgb(220, 80, 80);
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: -20px;
    align-self: center;
  }
`;