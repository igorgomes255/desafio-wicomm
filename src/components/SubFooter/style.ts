import styled from "styled-components";

export const Container = styled.section`
  background-color: #0b0b0b;
  width: 100%;
  height: 500px;

  display: flex;
  justify-content: space-between;

  margin-top: 60px;
`;

export const SectionContainer = styled.section`
  display: flex;

  .followUs {
    width: 245px;
    height: 100%;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;

    img {
      width: 215px;
      height: 40px;

      margin-bottom: 40px;
    }

    p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      text-align: center;

      color: #ffffff;

      margin-bottom: 16px;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }
  }

  .links {
    height: 60%;
    padding: 50px;

    display: flex;

    gap: 55px;

    .linksContainer {
      display: flex;
      flex-direction: column;

      width: 140px;

      gap: 14px;

      p {
        font-family: "Barlow";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;

        color: #ffffff;
        margin-bottom: 6px;
      }

      a {
        font-family: "Barlow";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #9a9a9a;
      }
    }
  }

  .paymentsSecurity {
    display: flex;
    padding: 50px;

    height: 40%;

    gap: 50px;
  }

  .payments {
    p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;

      margin-bottom: 25px;

      color: #ffffff;
    }

    .FormPayment {
      display: flex;
      flex-wrap: wrap;
      width: 212px;

      gap: 10px;
    }
  }

  .security {
    p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;

      margin-bottom: 25px;

      color: #ffffff;
    }

    .securityImages {
      display: flex;
      gap: 15px;
    }
  }
`;

export const AsideContainer = styled.aside`
  width: 353px;
  border-left: 1px solid #3a3a3c;

  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;
  }

  p {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;

    color: #ff9601;

    margin-bottom: 15px;
  }

  span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: #9a9a9a;

    margin-bottom: 16px;
  }

  .inputFooter {
    padding: 28px;
    background-color: #1c1c1e;
    border: 1px solid #3a3a3c;

    margin-top: 16px;

    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    color: #9a9a9a;
  }

  button {
    width: 138px;
    height: 40px;
    background-color: #ff9601;

    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #0b0b0b;

    margin-top: 25px;
  }
`;
