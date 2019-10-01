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
  h4 {
    text-align: center;
    color: #222;
    font-size: 14px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 20px;
    h4 {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 5px;
    h4 {
      font-size: 14px;
    }
  }
`;
