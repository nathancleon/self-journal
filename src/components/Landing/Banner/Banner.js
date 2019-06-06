import React, { Component } from "react";
import {
  BannerContainer,
  BannerContent,
  TitleName,
  BannerContentTitle,
  BannerContentText,
  BannerImg
} from "./BannerStyles";

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
        <BannerImg
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/weather_d9t2.svg"
          alt="man in a suit pointing at different weather conditions"
        />
      </BannerContainer>
    );
  }
}
