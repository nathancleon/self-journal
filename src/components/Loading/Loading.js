import { keyframes } from "@emotion/core";
import { colors } from "../../globalStyles";
import styled from "@emotion/styled";

const startLoading = keyframes`
  from {
    width: 0;
  }
  to {
    width: 99%;
  }
`;
export const Loading = styled.div`
  width: 100%;
  height: 4px;
  margin-top: -2px;
  background-color: ${colors.main};
  animation: ${startLoading} ${props => (props.slow ? `15s` : `6s`)} ease-in-out
    forwards;
`;
