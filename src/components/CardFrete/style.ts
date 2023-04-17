import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;

  gap: 10px;

  width: 478px;
  height: 280px;
  background: linear-gradient(213.8deg, #9a9a9a -17.86%, #0b0b0b 73%);

  @keyframes go-forwards {
    from {
      transform: translateY(0);
    }
    to {
      transform: rotate(90deg), translateY(10px);
    }
  }

  :hover {
    img {
      animation: go-forwards 1s alternate;
      transform: rotate(90deg);
    }
  }

  section {
    display: flex;
    flex-direction: column;

    justify-content: center;

    h1 {
      font-family: "Roboto Condensed";
      font-style: italic;
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      text-transform: uppercase;

      color: #ffffff;
    }

    p {
      font-family: "Roboto Condensed";
      font-style: italic;
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      text-transform: uppercase;

      color: #ff9601;
    }

    button {
      width: 123px;
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

      margin-top: 35px;

      color: #0b0b0b;
    }
  }
`;
