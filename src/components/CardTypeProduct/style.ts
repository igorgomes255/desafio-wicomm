import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 178px;

  :hover {
    img {
      transform: scale(1.5);
    }

    section > div {
      background: #ff9601;
      border-radius: 50%;
      transform: scale(1);
      transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    }
  }

  section {
    display: flex;

    justify-content: center;
    align-items: center;

    position: relative;
    height: 178px;
    width: 178px;

    background-color: #f1f1f1;
    border-radius: 50%;
  }

  section > div {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    width: 178px;
    height: 178px;
    transform: scale(0);
    transition: all 450ms ease 0ms;
  }

  section img {
    position: relative;
    padding: 7px;
    line-height: 30px;
  }

  p {
    font-family: "Barlow";
    font-weight: 700;
    font-size: 12px;
    color: #1c1c1e;
  }
`;
