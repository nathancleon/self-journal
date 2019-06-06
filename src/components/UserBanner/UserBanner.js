import React, { Component } from "react";
import styled from "@emotion/styled";
import Picture from "../../Assets/me.jpg";
import { colors } from "../../globalStyles";

export default class UserBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <ContentContainer>
          {/* replace with actual info from user */}
          <Image src={Picture} alt="picture of myself" />
          <TextContainer>
            <UserInfo>
              <Name>Nathan León</Name>
              <NoteCount>
                489<Notes>Notes</Notes>
              </NoteCount>
            </UserInfo>
            <TipOfTheDay>
              <Title>Tip of the day:</Title>
              <Tip>Go for a walk outside for at least 15 minutes.</Tip>
            </TipOfTheDay>
          </TextContainer>
        </ContentContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 241px;
  max-height: 241px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${colors.main};
  &:hover {
    background-color: ${colors.mainLight};
    cursor: pointer;
  }
`;

const Name = styled.h1`
  color: ${colors.backgroundDark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NoteCount = styled.p`
  color: ${colors.backgroundDark};
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
`;

const Notes = styled.span`
  font-size: 1rem;
  color: #777;
  margin-left: 5px;
`;

const TipOfTheDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100%;
  margin-left: 140px;
`;

const Title = styled.h3`
  color: ${colors.backgroundDark};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Tip = styled.p`
  font-size: 1.125rem;
  word-wrap: break-word;
  color: #5b5b5b;
`;
