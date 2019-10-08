import styled from "@emotion/styled";
import { colors } from "../../globalStyles";
export const HomeContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafaf;

  @media only screen and (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
  }
`;
export const ContentContainer = styled.div`
  width: 40%;
  min-width: 450px;
  height: 500px;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;

  @media only screen and (max-width: 1024px) {
    min-width: 80%;
    min-height: 520px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px 35px;
  }

  @media only screen and (max-width: 768px) {
    min-width: 95%;
  }

  @media only screen and (max-width: 480px) {
    height: auto;
    min-height: auto;
    min-width: 100%;
    border-radius: 0px;
    padding: 5px 10px;
  }
`;
export const RecentJournalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const RecentJournalTitle = styled.h2`
  font-size: 1.25rem;
  color: #5b5b5b;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const RecentJournalDate = styled.p`
  display: block;
  margin: auto 0;
  font-size: 1.25rem;
  color: #888;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const RecentJournal = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const RecentJournalData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const JournalQuestion = styled.div`
  h4 {
    display: inline-block;
    font-size: 0.75rem;
    background-color: ${colors.main};
    color: #fff;
    border-radius: 25px;
    padding: 5px 10px 5px 8px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 920px) {
    h4 {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 480px) {
    h4 {
      padding: 10px 20px;
    }
  }
`;
export const JournalAnswer = styled.div`
  h4 {
    display: inline-block;
    font-size: 0.75rem;
    background-color: #eee;
    color: #555;
    border-radius: 25px;
    padding: 5px 10px 5px 8px;
  }

  @media only screen and (max-width: 920px) {
    h4 {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 480px) {
    h4 {
      padding: 5px 20px;
    }
  }
`;

export const NoJournal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 90%;
  p {
    font-size: 1rem;
    text-align: center;
  }
  a {
    padding: 15px;
    width: 50%;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    align-self: center;
    background-color: ${colors.main};
    color: #fff;
    font-weight: bold;
    border: 1px solid #ddd;
    border-radius: 25px;
    margin-top: 30px;
    cursor: pointer;
    letter-spacing: 1px;
    &:hover {
      background-color: #fff;
      color: #000;
      font-weight: normal;
    }
  }
`;
