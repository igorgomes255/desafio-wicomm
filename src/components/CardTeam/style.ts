import styled from "styled-components";

export const Container = styled.section`
  width: 252px;
  height: 267px;
`;

export const InfoTeam = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 5;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  color: #ffffff;
  overflow: hidden;
  cursor: pointer;

  .content {
    transform: translateX(-100%);
    background-color: #2a2a2c;
    width: 100%;
    height: 100px;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  :hover .content {
    transform: translateX(0);
    opacity: 0.8;
  }
`;

export const Team = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;

  gap: 10px;

  margin-left: 20px;

  p {
    color: #ff9601;

    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 20px;
    line-height: 47px;

    text-transform: uppercase;
  }

  span {
    display: flex;
    align-items: center;
    color: #fff;

    gap: 10px;

    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 47px;

    text-transform: uppercase;
  }
`;
