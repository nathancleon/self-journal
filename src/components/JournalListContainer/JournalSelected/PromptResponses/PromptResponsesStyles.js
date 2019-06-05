import styled from "@emotion/styled";

export const SelectedPromptContainer = styled("div")`
   {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    background-color: #fefefe;
    width: 100%;
    margin-left: 80px;
    margin-top: 5px;
  }
  @media only screen and (max-width: 1200px) {
     {
      margin-left: 40px;
    }
  }

  @media only screen and (max-width: 600px) {
     {
      margin-left: 20px;
    }
  }
`;

export const SelectedPromptHeader = styled("div")`
   {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 40px;
    padding-bottom: 20px;
    background-color: #fefefe;
    box-shadow: -2px 6px 3px -5px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  h1 {
    font-size: 24px;
    height: 50px;
    padding-top: 15px;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 1400px) {
     {
      width: 80%;
    }
  }
  @media only screen and (max-width: 1200px) {
     {
      padding-bottom: 10px;
    }
    h1 {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 645px) {
     {
      margin-top: 10px;
      padding-bottom: 5px;
    }
    h1 {
      font-size: 10px;
      height: 30px;
    }
  }
`;

export const PromptIcons = styled("div")`
   {
    display: flex;
    justify-content: space-around;
    width: 80px;
    position: inline-block;
    height: 50px;
  }
  svg {
    width: 25px;
    cursor: pointer;
    margin-bottom: 2px;
  }
  svg:first-child {
    fill: orange;
    margin-right: 20px;
  }
  svg:nth-child(2) {
    fill: red;
    width: 23px;
  }

  @media only screen and (max-width: 645px) {
     {
      width: 50px;
      height: 35px;
      padding-left: 5px;
      margin-top: 5px;
    }
    svg {
      width: 20px;
    }
    svg:nth-child(2) {
      fill: red;
      width: 18px;
    }
  }
`;

export const SelectedPromptData = styled("div")`
   {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 5px;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
  }
  h4 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 645px) {
    h4 {
      font-size: 12px;
    }
  }
`;

export const UserAnswers = styled("div")`
   {
    display: flex;
  }
  p {
    text-align: left;
    margin-right: 8px;
    margin-bottom: 10px;
  }
  select {
    margin-bottom: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fafafa;
    font-size: 14px;
  }
  @media only screen and (max-width: 645px) {
    p {
      font-size: 12px;
    }
  }
`;

export const UserTextAnswers = styled("div")`
   {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  textarea {
    font-size: 16px;
    width: 60%;
    border: 1px solid #ddd;
    padding: 5px;
  }

  @media only screen and (max-width: 1200px) {
    textarea {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 645px) {
    textarea {
      font-size: 10px;
      width: 90%;
    }
  }
`;

export const SubmitButton = styled("button")`
   {
    display: inline-block;
    padding: 30px;
    width: 370px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    line-height: 0px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: rgba(80, 200, 80, 0.9);
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 1px;
    cursor: pointer;
  }
  &:hover {
    background-color: #fefefe;
    color: #333;
  }
  @media only screen and (max-width: 645px) {
     {
      width: 100%;
    }
  }
`;
