import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: ${colors.backgroundLight};

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  width: 100%;
`;
