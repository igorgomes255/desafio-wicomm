import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 80px;
`;

export const InfoTeam = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  flex-direction: column;

  h4 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;

    text-transform: uppercase;

    margin-top: 40px;

    background: -webkit-linear-gradient(left, white 35%, #ff9601 0%);

    background-clip: border-box;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    width: 60%;
  }

  .cardsTeam {
    display: flex;
    gap: 20px;
    margin-top: 30px;

    width: 60%;
  }
`;
