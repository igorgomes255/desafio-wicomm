import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  img {
    object-fit: cover;
  }
`;

export const InfoCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  width: 550px;
  margin-left: 200px;
  margin-top: 120px;

  h2 {
    font-family: "Roboto Condensed";
    font-size: 56px;
    font-weight: 700;

    background: linear-gradient(to bottom, white 45%, #ff9601 45%);
    background-clip: border-box;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: "Barlow";
    font-weight: 400;
    font-size: 16px;
    width: 320px;
    color: white;
  }

  .button {
    width: 120px;
    height: 48px;
    background-color: #ff9601;

    font-family: "Barlow";
    font-weight: 700;
    font-size: 16px;
    color: var(--black1);
  }
`;
