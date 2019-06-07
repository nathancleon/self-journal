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
  width: 100%;
  height: 100%;
`;
export const Prompts = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${colors.backgroundLight};
`;
