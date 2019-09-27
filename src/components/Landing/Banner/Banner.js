import React, { Component } from "react";
import {
  BannerContainer,
  BannerContent,
  TitleName,
  BannerContentTitle,
  BannerContentText,
  BannerImg
} from "./BannerStyles";
import { WeatherIcon } from "../../../SvgComponents/LandingIcons";

export default class Banner extends Component {
  render() {
    return (
      <BannerContainer>
        <BannerContent>
          <BannerContentTitle>
            Take a <TitleName>mentalnote</TitleName> today
          </BannerContentTitle>
          <BannerContentText>
            Write out how you really feel, about every single day. Read your
            previous journal entries and recognize patterns over the course of a
            week, month, or year.
          </BannerContentText>
        </BannerContent>
        <WeatherIcon />
      </BannerContainer>
    );
  }
}
