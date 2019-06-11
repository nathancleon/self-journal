import styled from "@emotion/styled";
import { colors } from "../../globalStyles";
export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafaf;
`;
export const ContentContainer = styled.div`
  width: 550px;
  height: 525px;
  padding: 20px 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: scroll;
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
`;
