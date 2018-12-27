import React, { Component } from "react";
import { css } from "react-emotion";
import { colors } from "../../../globalStyles";

const banner = css`
  {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 50vw;
    width: 100%;
    position: relative;
    background-color: ${colors.backgroundDark};
    padding-top: 10vw;
    padding-bottom: 10vw;
    z-index: 2;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    border-bottom: 20vh solid $blue;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 6vh solid ${colors.main};
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -20vh;
    border-left: 100vw solid transparent;
    border-right: 0vw solid transparent;
    border-top: 20.1vh solid ${colors.backgroundDark};
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
      padding-bottom: 20vw;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      order: 2;
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

    img {
      order: 1;
      width: 80vw;
      min-width: 40vw;
      margin-bottom: 5vw;
    }
  }
`;

const banner_content = css`
  {
    width: 30vw;
    order: 1;
  }
`;

const banner_content__title = css`
  {
    font-size: 3rem;
    font-family: 'Nunito', sans-serif;
    line-height: 3.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`;

const title__name = css`
  {
    font-family: 'Nunito', sans-serif;
    position: relative;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }
`;

const banner_content__text = css`
  {
    width: 95%;
    font-size: 1.25rem;
    color: #fff;
  }
`;

const banner_img = css`
  {
    width: 40vw;
    order: 2;
  }
`;

export default class Banner extends Component {

  render() {
    return (
      <div className={banner}>
        <div className={banner_content}>
          <h1 className={banner_content__title}>Take a <span className={title__name}>mentalnote</span> today</h1>
          <p className={banner_content__text}>
          Write out how you really feel, about every single day. Read your previous journal entries and recognize patterns over the course of a week, month, or year.
          </p>
        </div>
        <img 
          className={banner_img}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/weather_d9t2.svg"
          alt="man in a suit pointing at different weather conditions" />
      </div>
    );
  }
}