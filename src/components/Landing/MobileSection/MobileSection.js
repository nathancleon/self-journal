import React, { Component } from "react";
import {
  banner,
  banner_content,
  banner_content__text,
  banner_content__title,
  banner_img
} from "./MobileSectionStyles";

export default class MobileSection extends Component {
  render() {
    return (
      <div className={banner}>
        <div className={banner_content}>
          <h1 className={banner_content__title}>
            Take your journaling on the road
          </h1>
          <p className={banner_content__text}>
            Check in with yourself on any device. Whether you're on your phone,
            tablet, or computer, you'll be able to log how you feel wherever and
            whenever you are.
          </p>
        </div>
        <img
          className={banner_img}
          src={require("../../../Assets/iphone-screenshot@2x.png")}
          alt="screenshot of the mobile application inside a mock phone"
        />
      </div>
    );
  }
}
