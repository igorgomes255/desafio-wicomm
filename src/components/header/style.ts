import styled from "styled-components";

export const SectionContainer = styled.section`
  z-index: 5;
  position: fixed;
  width: 100%;
`;

export const Container = styled.header`
  background-color: var(--black1);
  height: 72px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .input {
    font-family: "Barlow";
    font-weight: 500;
    font-size: 14px;
    color: var(--grey1);

    width: 220px;
    background-color: #1c1c1e;
    border: 1px solid #3a3a3c;
    border-radius: 4px;
  }

  .icons {
    display: flex;
    gap: 25px;
  }
`;

export const Links = styled.section`
  display: flex;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100px;
    height: 72px;

    font-family: "Barlow";
    font-weight: 700;
    font-size: 14px;
    color: var(--grey1);

    :hover {
      background-color: #2c2c2e;
    }

    :before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 5px;

      background-color: #ff9601;
      transition: width 0.2s ease-out;
    }

    :hover::before {
      width: 100%;
    }
  }
`;
