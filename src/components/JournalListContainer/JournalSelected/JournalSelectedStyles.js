import styled from "@emotion/styled";
export const JournalSelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  max-height: 100%;
  overflow-x: hidden;
  transform: ${props => (props.expand ? "translateX(1000px)" : "none")};
`;
export const NoJournalEntries = styled.div`
  margin-top: 10vh;
`;
