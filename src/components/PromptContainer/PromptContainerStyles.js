import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  position: relative;
  min-height: 70%;
  width: 100%;
  background-color: ${colors.backgroundLight};
  overflow-y: scroll;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Prompts = styled.div`
  display: flex;
  width: 100%;
  min-height: 550px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${colors.backgroundLight};
`;
