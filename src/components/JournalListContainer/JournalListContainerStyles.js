import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ErrorMessage = styled.p`
  display: flex;
  align-self: center;
  font-size: 2rem;
`;

export const JournalListWrapper = styled.ul`
  width: 25%;
  @media only screen and (max-width: 1024px) {
    display: ${props => (props.expand ? "flex" : "none")};
    min-width: 100vw;
  }
`;
