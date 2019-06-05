import React, { Component } from "react";
import Main from "../Main/Main";
import styled from "@emotion/styled";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Main />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
