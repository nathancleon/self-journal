import styled from "@emotion/styled";

export const JListItem = styled.li`
  border-top: 1px solid #ddd;
  background-color: #fefefe;
  padding: 30px;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  &:last-of-type {
    border-bottom: 1px solid #ddd;
  }
  p {
    text-align: center;
    color: #555;
    font-size: 1rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 20px;
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 5px;
  }
`;
