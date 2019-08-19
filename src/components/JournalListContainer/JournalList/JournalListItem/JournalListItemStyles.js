import styled from "@emotion/styled";

export const JListItem = styled.li`
  border-top: 1px solid #ddd;
  background-color: #fefefe;
  padding: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgba(58, 94, 255, 0.1);
  }
  &:last-of-type {
    border-bottom: 1px solid #ddd;
  }
  h4 {
    text-align: center;
    color: #222;
    font-size: 14px;
  }
  @media only screen and (max-width: 1200px) {
    padding: 20px;
    h4 {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 5px;
    h4 {
      font-size: 10px;
    }
  }
`;
