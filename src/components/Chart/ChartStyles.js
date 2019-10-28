import styled from "@emotion/styled";
import { colors } from "../../globalStyles";

export const SelectDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 100;
  select {
    font-size: 1rem;
    background-color: transparent;
    height: 35px;
    border: none;
    border: 1px solid #ddd;
  }
`;
