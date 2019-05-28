import React, { Component } from "react";
import {
  banner,
  banner_content,
  banner_content__title,
  banner_content__text,
  banner_img,
  title__name
} from "./BannerStyles";

export default class Banner extends Component {
  render() {
    return (
      <div className={banner}>
        <div className={banner_content}>
          <h1 className={banner_content__title}>
            Take a <span className={title__name}>mentalnote</span> today
          </h1>
          <p className={banner_content__text}>
            Write out how you really feel, about every single day. Read your
            previous journal entries and recognize patterns over the course of a
            week, month, or year.
          </p>
        </div>
        <img
          className={banner_img}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/weather_d9t2.svg"
          alt="man in a suit pointing at different weather conditions"
        />
      </div>
    );
  }
}
