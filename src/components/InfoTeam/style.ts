import styled from "styled-components";

export const Container = styled.section`
  .buttonSeeAll {
    width: 140px;
    height: 48px;
    margin-top: 15px;

    background-color: #ff9601;

    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #0b0b0b;
  }
`;

export const InfoTeam = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  h4 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    text-transform: uppercase;

    margin-top: 10px;

    background: -webkit-linear-gradient(left, white 40%, #ff9601 0%);

    background-clip: border-box;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    width: 60%;
  }

  .cardsTeam {
    display: flex;
    gap: 20px;
    width: 60%;
  }
`;
