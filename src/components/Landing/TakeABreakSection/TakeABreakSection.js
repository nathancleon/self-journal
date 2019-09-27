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
import { CampingIcon } from "../../../SvgComponents/LandingIcons";

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
        <CampingIcon />
      </Banner>
    );
  }
}
