import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50vw;
  width: 100%;
  position: relative;
  background-color: ${colors.backgroundDark};
  padding-top: 10vw;
  padding-bottom: 10vw;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    border-bottom: 20vh solid $blue;
    border-left: 0 solid transparent;
    border-right: 100vw solid transparent;
    border-top: 6vh solid ${colors.main};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -20vh;
    border-left: 100vw solid transparent;
    border-right: 0vw solid transparent;
    border-top: 20.1vh solid ${colors.backgroundDark};
  }

  @media only screen and (max-width: 1024px) {
     {
      padding-top: 20vw;
    }
  }

  @media only screen and (max-width: 780px) {
     {
      flex-direction: column;
      padding-top: 20vw;
      padding-bottom: 20vw;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      order: 2;
      width: 90%;
    }

    div h1 {
      text-align: center;
      font-size: 1.75rem;
      line-height: 3rem;
    }

    div p {
      font-size: 1rem;
    }

    img {
      order: 1;
      width: 80vw;
      min-width: 40vw;
      margin-bottom: 5vw;
    }
  }
`;

export const BannerContent = styled.div`
  width: 30vw;
  order: 1;
`;

export const BannerContentTitle = styled.h1`
  font-size: 3rem;
  font-family: "Nunito", sans-serif;
  line-height: 3.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
`;

export const TitleName = styled.span`
  font-family: "Nunito", sans-serif;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }
`;

export const BannerContentText = styled.p`
  width: 95%;
  font-size: 1.25rem;
  color: #fff;
`;

export const BannerImg = styled.img`
   {
    width: 40vw;
    order: 2;
  }
`;
