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
    min-width: 100%;
    border-radius: 0px;
    padding: 10px 25px;
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
`;
export const RecentJournalDate = styled.p`
  display: block;
  margin: auto 0;
  font-size: 1.25rem;
  color: #888;
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
    padding: 5px 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 920px) {
    h4 {
      font-size: 0.85rem;
    }
  }

  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 0.7rem;
    }
  }
`;
export const JournalAnswer = styled.div`
  h4 {
    display: inline-block;
    font-size: 0.7rem;
    background-color: #eee;
    color: #555;
    border-radius: 25px;
    padding: 5px 15px;
  }

  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 0.6rem;
    }
  }
`;
