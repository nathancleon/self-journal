import React from "react";
import styled from "@emotion/styled";

const Loading = () => {
  return <LoadingContainer>Loading . . .</LoadingContainer>;
};

export default Loading;

const LoadingContainer = styled.h2`
  display: flex;
  align-self: center;
  font-size: 2rem;
  margin-top: 15%;
`;
