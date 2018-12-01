import React, { Component } from "react";
import Header from "../Headers/Header";
import { css } from "react-emotion";
import { colors } from "../../globalStyles";

const landing = css`
  {
    height: 100%;
  }
`;

const banner = css`
  {
    height: 80vh;
    position: relative;
    background-color: ${colors.backgroundDark};
  }
  &:before {
    content: '';
    position: absolute;
    margin:0 auto;
    width:0px;
    height:0px;
    top: 0vh;
    border-left:0 solid transparent;
    border-right:200vw solid transparent;
    border-top: 3vh solid ${colors.main};
  }
  &:after {
    content: '';
    position: absolute;
    margin:0 auto;
    width:0px;
    height:0px;
    bottom: -20vh;
    border-left: 170vw solid transparent;
    border-right: 0vw solid transparent;
    border-top: 20vh solid ${colors.backgroundDark};
  }
`;

export default class Landing extends Component {
  render() {

    const linksArray = ["login", "register"];

    return (
      <div>
       <Header links={linksArray} />
        <div className={landing}>
        <section className={banner}>
        </section>
        </div>
      </div>
      
    );
  }
}
