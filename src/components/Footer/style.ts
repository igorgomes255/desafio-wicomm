import styled from "styled-components";

export const Container = styled.footer`
  background-color: #0b0b0b;
  width: 100%;
  height: 88px;

  border-top: 1px solid #3a3a3c;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;

    margin-left: 50px;
  }

  figure {
    display: flex;

    gap: 20px;
    margin-right: 50px;
  }
`;
