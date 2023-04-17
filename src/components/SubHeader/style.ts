import styled from "styled-components";

export const Container = styled.section`
  height: 32px;
  background-color: #1c1c1e;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 55px;

    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #ff9601;
  }

  h4 {
    margin-right: 55px;

    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;

    color: #ff9601;
  }

  section {
    display: flex;
    align-items: center;

    gap: 10px;

    span {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;

      text-transform: uppercase;

      color: #cacaca;
    }
  }
`;
