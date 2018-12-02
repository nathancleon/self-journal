import React, { Component } from "react";
import { css } from "react-emotion";
import { colors } from "../../../globalStyles";

const banner = css`
  {
    display: flex;
    justify-content: space-around;
    height: 95vh;
    width: 100%;
    padding-top: 40vh;
    position: relative;
    background-color: ${colors.main};
    z-index: 0;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -20vh;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 20vh solid ${colors.main}
  }
`;

const banner_content = css`
  {
    width: 40%;
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
    max-width: 400px;
    margin-top: -22vh;
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