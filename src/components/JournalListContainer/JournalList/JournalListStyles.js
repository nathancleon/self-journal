import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";

export const JList = styled.div`
  border-right: 1px solid #ddd;
  background-color: ${colors.backgroundLight};
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  ul {
    z-index: 1;
    li:first-of-type {
      border-top: none;
    }
  }
`;

export const ListLabel = styled.div`
  text-align: center;
  padding: 35px;
  width: 100%;
  position: absolute;
  background-color: #fefefe;
  border-bottom: 1px solid #ddd;
  z-index: 20;
  @media only screen and (max-width: 1024px) {
    padding: 30px 20px;
    h4 {
      font-size: 14px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 5px;
    h4 {
      font-size: 12px;
    }
  }
`;

export const NoItems = styled.p`
  padding-top: 30px;
  text-align: center;
  @media only screen and (max-width: 1200px) {
     {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 600px) {
     {
      font-size: 10px;
    }
  }
`;
