import React, { Component } from "react";
import {
  Banner,
  BannerContent,
  BannerContentTitle,
  BannerContentText,
  BannerImg
} from "./MobileSectionStyles";

export default class MobileSection extends Component {
  render() {
    return (
      <Banner>
        <BannerContent>
          <BannerContentTitle>
            Take your journaling on the road
          </BannerContentTitle>
          <BannerContentText>
            Check in with yourself on any device. Whether you're on your phone,
            tablet, or computer, you'll be able to log how you feel wherever and
            whenever you are.
          </BannerContentText>
        </BannerContent>
        <BannerImg
          src={require("../../../Assets/iphone-screenshot@2x.png")}
          alt="screenshot of the mobile application inside a mock phone"
        />
      </Banner>
    );
  }
}
