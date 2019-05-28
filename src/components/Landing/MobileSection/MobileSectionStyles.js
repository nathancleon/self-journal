import { css } from "react-emotion";
import { colors } from "../../../globalStyles";

export const banner = css`
   {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 10vh;
    position: relative;
    background-color: ${colors.main};
    padding-top: 10vw;
    padding-bottom: 5vw;
    z-index: 1;
  }
  &:after {
    content: "";
    bottom: -20.1vh;
    position: absolute;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 20.2vh solid ${colors.main};
  }

  @media only screen and (max-width: 1024px) {
     {
      padding-top: 20vw;
    }
  }

  @media only screen and (max-width: 780px) {
     {
      flex-direction: column;
      padding-top: 20vw;
      padding-bottom: 10vw;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
    }
    div h1 {
      text-align: center;
      font-size: 1.75rem;
      line-height: 3rem;
    }
    div p {
      font-size: 1rem;
    }
  }
`;

export const banner_content = css`
   {
    width: 35vw;
    order: 2;
  }
`;

export const banner_content__title = css`
   {
    font-size: 3rem;
    font-family: "Nunito", sans-serif;
    line-height: 3.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`;

export const banner_content__text = css`
   {
    width: 95%;
    font-size: 1.25rem;
    color: #fff;
  }
`;

export const banner_img = css`
   {
    width: 25vw;
    min-width: 40vmin;
    order: 1;
  }

  @media only screen and (max-width: 600px) {
     {
      margin-top: 5vw;
      min-width: 50vmin;
    }
  }
`;
