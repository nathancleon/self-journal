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
    background-color: ${colors.main};
    z-index: 1;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -20vh;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 20.1vh solid ${colors.main}
  }

 @media only screen and (max-width: 780px) {
    {
      flex-direction: column;
      height: 105vh;
    }
    div {
      width: 90%;
    }
    img {
      width: 50vw;
      min-width: 40vw;
    }
  }
`;

const banner_content = css`
  {
    width: 35vw;
    order: 2;
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

const banner_content__text = css`
  {
    width: 95%;
    font-size: 1.25rem;
    color: #fff;
  }
`;

const banner_img = css`
  {
    width: 25vw;
    min-width: 400px;
    order: 1;
  }
`;

export default class MobileSection extends Component {

  render() {
    return (
      <div className={banner}>
        <div className={banner_content}>
          <h1 className={banner_content__title}>Take your journaling on the road</h1>
          <p className={banner_content__text}>
          Check in with yourself on any device. Whether you're on your phone, tablet, or computer, you'll be able to log how you feel wherever and whenever you are.
          </p>
        </div>
        <img 
          className={banner_img}
          src={require("../../../Assets/iphone-screenshot@2x.png")} />
      </div>
    );
  }
}