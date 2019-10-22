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
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
  }
`;
export const ContentContainer = styled.div`
  width: 450px;
  height: 500px;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  .recharts-tooltip-wrapper {
    display: block !important;
    padding: 10px !important;
    background-color: #fff !important;
    border: 1px solid #ddd !important;
    box-shadow: 0 1px 6px 0 rgba(21, 27, 38, 0.15) !important;
    p:first-of-type {
      color: #555;
    }
    p:last-of-type {
      color: ${colors.main};
    }
  }

  @media only screen and (max-width: 1024px) {
    min-width: 80%;
    min-height: 520px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px 35px;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    min-width: 95%;
  }

  @media only screen and (max-width: 480px) {
    height: auto;
    min-height: auto;
    width: 100%;
    min-width: 100%;
    border-radius: 0px;
    padding: 5px 10px;
  }
`;

export const ChartContentContainer = styled(ContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-width: 50%;
  margin-left: 5px;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    min-width: 95%;
  }
  @media only screen and (max-width: 480px) {
    min-height: auto;
    min-width: 100%;
    height: auto;
    border-radius: 0px;
    padding: 0;
    .recharts-wrapper svg tspan {
      font-size: 12px !important;
    }
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  .recharts-wrapper {
    svg {
      width: 100%;
      height: 80%;
      .recharts-label {
        tspan {
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .recharts-responsive-container {
      max-width: 100%;
      max-height: 80%;
    }
      .recharts-wrapper svg tspan {
        font-size: 12px !important;
      }
    }
  }
`;

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

export const StyledTooltip = styled.div`
  .tooltip-wrapper {
    display: block;
    width: 80px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
  p {
    font-size: 12px;
  }
`;

export const RecentJournalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const RecentJournalTitle = styled.h2`
  font-size: 1rem;
  color: #5b5b5b;
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export const RecentJournalDate = styled.p`
  display: block;
  margin: auto 0;
  font-size: 1rem;
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
    font-size: 11px;
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
      font-size: 10px;
      padding: 5px 10px;
    }
  }
`;
export const JournalAnswer = styled.div`
  h4 {
    display: inline-block;
    font-size: 11px;
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
      font-size: 10px;
      padding: 5px 10px;
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
