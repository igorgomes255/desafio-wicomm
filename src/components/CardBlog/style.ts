import styled from "styled-components";

export const Container = styled.section`
  width: 400px;

  img {
    height: 200px;
  }

  .cardBlog {
    background-color: #1c1c1e;
    border: 1px solid #3a3a3c;
    height: 380px;

    .cardBody {
      margin-left: 24px;

      .textDate {
        font-family: "Barlow";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #cacaca;
      }

      .titleCard {
        font-family: "Barlow";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;

        color: #ffffff;

        margin-top: 15px;
      }

      button {
        width: 138px;
        height: 40px;
        background-color: #ff9601;

        font-family: "Barlow";
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;

        text-align: center;
        letter-spacing: 0.08em;
        text-transform: uppercase;

        color: #0b0b0b;

        margin-top: 20px;
      }
    }
  }
`;
