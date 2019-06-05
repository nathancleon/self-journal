import React, { Component } from "react";
import Header from "../Headers/Header";
import { css } from "@emotion/core";
import Banner from "./Banner/Banner";
import MobileSection from "./MobileSection/MobileSection";
import TakeABreakSection from "./TakeABreakSection/TakeABreakSection";

export default class Landing extends Component {
  render() {

    const linksArray = ["login", "register"];

    return (
      <div className={landing}>
        <Header links={linksArray} />
        <Banner />
        <MobileSection />
        <TakeABreakSection />
      </div>
      
    );
  }
}

const landing = css`
  {
    height: 100%;
  }
`;