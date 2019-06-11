import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 241px;
  max-height: 241px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 15px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
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
    &:after {
      display: block;
      content: ""; //replace with image icon url
      position: absolute;
      width: 100px;
      height: 100px;
      right: 0;
      bottom: 0;
      z-index: 20;
      background: ${colors.main};
      opacity: 0.7;
      border-radius: 50%;
    }
  }
`;

export const Name = styled.h1`
  color: ${colors.backgroundDark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
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
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100%;
  margin-left: 140px;
`;

export const Title = styled.h3`
  color: ${colors.backgroundDark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tip = styled.p`
  font-size: 1.125rem;
  word-wrap: break-word;
  color: #5b5b5b;
`;
