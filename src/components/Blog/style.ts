import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 540px;
  background: linear-gradient(180deg, #3a3a3c 0%, #0b0b0b 101.48%);
`;

export const InfosBlog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 540px;

  margin-left: 56px;
  margin-right: 56px;

  .infoBlogs {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-family: "Roboto Condensed";
      font-style: italic;
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;

      text-transform: uppercase;

      background: -webkit-linear-gradient(left, white 20%, #ff9601 0%);

      background-clip: border-box;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    button {
      width: 127px;
      height: 40px;
      background-color: #ff9601;

      font-family: "Barlow";
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;

      text-align: center;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }
`;
