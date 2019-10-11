import styled from "@emotion/styled";
import { colors } from "../../../globalStyles";

export const Banner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: #fff;
  z-index: 0;
  padding-top: 20vw;
  svg {
    width: 35vw;
    min-width: 400px;
    order: 2;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 1024px) {
    padding-top: 30vw;
  }
  @media only screen and (max-width: 780px) {
    flex-direction: column;
    padding-top: 50vw;
    div {
      width: 90%;
      order: 2;
    }
    div h1 {
      text-align: center;
      font-size: 1.75rem;
      line-height: 6vh;
    }
    div p {
      font-size: 1rem;
    }
    svg {
      width: 80vw;
      height: auto;
      min-width: 40vw;
      order: 1;
      margin-bottom: 10vw;
    }
    a button {
      font-size: 1rem;
    }
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36vw;
  order: 1;
  margin-bottom: 50px;
`;

export const BannerContentTitle = styled.h1`
  font-size: 3rem;
  font-family: "Nunito", sans-serif;
  line-height: 3.5rem;
  color: ${colors.backgroundDark};
  margin-bottom: 1.5rem;
`;

export const BannerContentText = styled.p`
  width: 98%;
  font-size: 1.25rem;
  color: ${colors.backgroundDark};
`;

export const BannerImg = styled.img`
  width: 35vw;
  min-width: 400px;
  order: 2;
  margin-bottom: 50px;
`;

export const SignupLink = styled.a`
  height: 60px;
  width: 35%;
  min-width: 200px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const SignupButton = styled.button`
  font-size: 18px;
  width: 100%;
  background-color: ${colors.main};
  color: #fff;
  font-weight: bold;
  border: 1px solid #ddd;
  border-radius: 50px;
  padding: 12px;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    background-color: #fff;
    color: #000;
    font-weight: normal;
  }
`;
