import styled from "@emotion/styled";
import { colors } from "../../globalStyles";
import cameraIcon from "../../Assets/camera.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 241px;
  max-height: 241px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  @media only screen and (max-width: 1024px) {
    min-height: 180px;
  }

  @media only screen and (max-width: 768px) {
    min-height: 241px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
  @media only screen and (max-width: 1024px) {
    width: 95%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  padding-left: 50px;
  @media only screen and (max-width: 768px) {
    padding-left: 0;
    min-width: 100%;
  }
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
`;

export const Image = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${colors.main};
  z-index: 1;
  img {
    border-radius: inherit;
    width: inherit;
    height: inherit;
  }
  &:hover {
    cursor: pointer;
    &:before {
      display: block;
      content: "";
      position: absolute;
      width: 100px;
      height: 100px;
      right: 0;
      bottom: 0;
      z-index: 20;
      background: ${colors.main};
      opacity: 0.8;
      border-radius: 50%;
    }
    &:after {
      content: url(${cameraIcon});
      width: 25%;
      height: 25%;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 20;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export const Name = styled.h1`
  color: ${colors.backgroundDark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const NoteCount = styled.p`
  color: ${colors.backgroundDark};
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
`;

export const Notes = styled.span`
  font-size: 1rem;
  color: #777;
  margin-left: 5px;
`;

export const TipOfTheDay = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-top: 25px;
  width: 50%;
  height: 100%;
  padding: 25px 25px 0px 0px;

  @media only screen and (max-width: 767px) {
    max-height: auto;
    padding: 0;
    padding-top: 20px;
    width: 80%;
  }
`;

export const Title = styled.h3`
  color: ${colors.backgroundDark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Tip = styled.p`
  font-size: 1.125rem;
  word-wrap: break-word;
  color: #5b5b5b;
  @media only screen and (max-width: 768px) {
    font-size: 0.825rem;
  }
`;
