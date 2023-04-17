import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 278px;

  gap: 5px;

  figure {
    display: flex;
    justify-content: center;
    position: relative;

    width: 300px;

    img {
      width: 160px;
      height: 160px;
    }

    h3 {
      position: absolute;
      top: 100px;

      font-family: "Roboto Condensed";
      font-style: italic;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;

      text-align: center;
      text-transform: uppercase;

      color: #1c1c1e;
    }
  }

  section {
    width: 640px;

    p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      text-align: center;

      color: #3a3a3c;
    }
  }
`;
