import React, { Component } from "react";
import Header from "../Header/Header";
import styled from "@emotion/styled";
import Banner from "./Banner/Banner";
import MobileSection from "./MobileSection/MobileSection";
import TakeABreakSection from "./TakeABreakSection/TakeABreakSection";

export default class Landing extends Component {
  render() {
    const linksArray = ["login", "register"];

    return (
      <LandingContainer>
        <Header links={linksArray} />
        <Banner />
        <MobileSection />
        <TakeABreakSection />
      </LandingContainer>
    );
  }
}

const LandingContainer = styled.div`
   {
    height: 100%;
  }
`;
