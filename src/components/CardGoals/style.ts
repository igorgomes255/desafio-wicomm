import styled from "styled-components";

export const Container = styled.section`
  width: 277px;

  .infoCard {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    padding: 0;

    .sectionGoals {
      display: flex;
      align-items: center;
      background-color: #ff9601;

      width: 180px;
      height: 40px;

      h4 {
        font-family: "Barlow";
        font-style: italic;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        margin-left: 15px;
        margin-top: 15px;

        text-transform: uppercase;

        color: #0b0b0b;
      }
    }

    div {
      width: 30px;

      border-top: 40px solid #ff9601;
      border-right: 20px solid transparent;
    }
  }
`;
