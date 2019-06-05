import { css } from "@emotion/core";
import { colors } from "../../../globalStyles";

export const banner = css`
   {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: #fff;
    z-index: 0;
    padding-top: 20vw;
    padding-bottom: 10vw;
  }

  @media only screen and (max-width: 1024px) {
     {
      padding-top: 30vw;
    }
  }
  @media only screen and (max-width: 780px) {
     {
      flex-direction: column;
    }
    div {
      width: 90%;
      order: 2;
    }
    div h1 {
      text-align: center;
      font-size: 1.75rem;
      line-height: 6vh;
    }
    div p {
      font-size: 1rem;
    }
    img {
      width: 80vw;
      min-width: 40vw;
      order: 1;
      margin-bottom: 10vw;
    }
    a button {
      font-size: 1rem;
    }
  }
`;

export const banner_content = css`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36vw;
    order: 1;
    margin-bottom: 50px;
  }
`;

export const banner_content__title = css`
   {
    font-size: 3rem;
    font-family: "Nunito", sans-serif;
    line-height: 3.5rem;
    color: ${colors.backgroundDark};
    margin-bottom: 1.5rem;
  }
`;

export const banner_content__text = css`
   {
    width: 98%;
    font-size: 1.25rem;
    color: ${colors.backgroundDark};
  }
`;

export const banner_img = css`
   {
    width: 35vw;
    min-width: 400px;
    order: 2;
    margin-bottom: 50px;
  }
`;

export const signup_link = css`
   {
    height: 60px;
    width: 35%;
    min-width: 200px;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const signup_btn = css`
   {
    font-size: 18px;
    height: 100%;
    width: 100%;
    background-color: ${colors.main};
    color: #fff;
    font-weight: bold;
    border: 1px solid #ddd;
    border-radius: 25px;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;
