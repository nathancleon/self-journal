import React, { Component } from "react";
import { css } from "react-emotion";
import { colors } from "../../../globalStyles";

const banner = css`
  {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    width: 100%;
    padding-top: 10vh;
    position: relative;
    background-color: #fff;
    z-index: 0;
  }

 @media only screen and (max-width: 780px) {
    {
      flex-direction: column;
      height: 105vh;
    }
    div {
      width: 90%;
      order: 2;
    }
    img {
      width: 50vw;
      min-width: 40vw;
      order: 1;
      margin-bottom: -25vh;
    }
  }
`;

const banner_content = css`
  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36vw;
    order: 1;
  }
`;

const banner_content__title = css`
  {
    font-size: 3rem;
    font-family: 'Nunito', sans-serif;
    line-height: 3.5rem;
    color: ${colors.backgroundDark};
    margin-bottom: 1.5rem;
  }
`;

const banner_content__text = css`
  {
    width: 98%;
    font-size: 1.25rem;
    color: ${colors.backgroundDark};
  }
`;

const banner_img = css`
  {
    width: 35vw;
    min-width: 400px;
    order: 2;
  }
`;

const signup_link = css`
  {
    height: 60px;
    width: 35%;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

const signup_btn = css`
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

export default class MobileSection extends Component {

  render() {
    return (
      <div className={banner}>
        <div className={banner_content}>
          <h1 className={banner_content__title}>Identify when you need to reset</h1>
          <p className={banner_content__text}>
            By journaling every day you'll be able to see how you're really feeling over the course of a day, week, or month. Logging your emotions will allow you to notice when you might need a break or some time away.
          </p>
          <a className={signup_link}  href="/register">
            <button className={signup_btn} type="button">Sign Up!</button>
          </a>
        </div>
        <img 
          className={banner_img}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Camping_2g8w.svg" />
      </div>
    );
  }
}