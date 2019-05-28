import React, { Component } from "react";
import {
  banner,
  banner_content,
  banner_content__title,
  banner_content__text,
  signup_btn,
  signup_link,
  banner_img
} from "./TakeABreakSectionStyles";

export default class MobileSection extends Component {
  render() {
    return (
      <div className={banner}>
        <div className={banner_content}>
          <h1 className={banner_content__title}>
            Identify when you need to reset
          </h1>
          <p className={banner_content__text}>
            By journaling every day you'll be able to see how you're really
            feeling over the course of a day, week, or month. Logging your
            emotions will allow you to notice when you might need a break or
            some time away.
          </p>
          <a className={signup_link} href="/register">
            <button className={signup_btn} type="button">
              Sign Up!
            </button>
          </a>
        </div>
        <img
          className={banner_img}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Camping_2g8w.svg"
          alt="a man riding a scooter in the woods next to a tent and a car in the background"
        />
      </div>
    );
  }
}
