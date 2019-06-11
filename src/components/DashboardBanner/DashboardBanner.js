import React, { Component } from "react";
import Picture from "../../Assets/me.jpg";
import {
  Container,
  ContentContainer,
  TextContainer,
  UserInfo,
  Image,
  Name,
  NoteCount,
  Notes,
  TipOfTheDay,
  Title,
  Tip
} from "./DashboardBannerStyles";

export default class UserBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <ContentContainer>
          {/* replace with actual info from user */}
          <Image>
            <img src={Picture} alt="picture of myself" />
          </Image>
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
