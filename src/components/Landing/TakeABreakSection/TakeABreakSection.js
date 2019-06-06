import React, { Component } from "react";
import {
  Banner,
  BannerContent,
  BannerContentTitle,
  BannerContentText,
  SignupLink,
  SignupButton,
  BannerImg
} from "./TakeABreakSectionStyles";

export default class MobileSection extends Component {
  render() {
    return (
      <Banner>
        <BannerContent>
          <BannerContentTitle>
            Identify when you need to reset
          </BannerContentTitle>
          <BannerContentText>
            By journaling every day you'll be able to see how you're really
            feeling over the course of a day, week, or month. Logging your
            emotions will allow you to notice when you might need a break or
            some time away.
          </BannerContentText>
          <SignupLink href="/register">
            <SignupButton type="button">Sign Up!</SignupButton>
          </SignupLink>
        </BannerContent>
        <BannerImg
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Camping_2g8w.svg"
          alt="a man riding a scooter in the woods next to a tent and a car in the background"
        />
      </Banner>
    );
  }
}
