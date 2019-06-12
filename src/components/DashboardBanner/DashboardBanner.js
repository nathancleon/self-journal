import React, { Component } from "react";
import Picture from "../../Assets/me.jpg";
import {
  Container,
  ContentContainer,
  InfoContainer,
  UserInfo,
  UserText,
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
          <InfoContainer>
            <UserInfo>
              <Image>
                <img src={Picture} alt="picture of myself" />
              </Image>
              <UserText>
                <Name>Nathan León</Name>
                <NoteCount>
                  489<Notes>Notes</Notes>
                </NoteCount>
              </UserText>
            </UserInfo>
            <TipOfTheDay>
              <Title>Tip of the day:</Title>
              {/* <Tip>Go for a walk outside for at least 15 minutes.</Tip> */}
              <Tip>
                Slow down your day a bit by scheduling 30 minutes for
                relaxation. Read a book or take a quick snooze.
              </Tip>
              {/* <Tip>
                Reach out to a friend or family member you haven't heard from in
                a while.
              </Tip> */}
            </TipOfTheDay>
          </InfoContainer>
        </ContentContainer>
      </Container>
    );
  }
}
