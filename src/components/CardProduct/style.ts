import styled from "styled-components";

export const Container = styled.section`
  margin-top: 100px;
  margin-bottom: 100px;

  width: 270px;
  height: 340px;

  .cardProduct {
    height: 340px;

    :hover {
      background-color: #f1f1f1;
    }
  }

  .buttonComprar {
    width: 270px;
    height: 50px;
    background-color: #ff9601;

    color: black;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const SectionImage = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 20px;

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }

  img {
    width: 170px;
    margin-left: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const SectionText = styled.section`
  margin-left: 25px;

  .titleCard {
    width: 160px;
    font-family: "Barlow";
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: black;
    margin-bottom: 10px;
  }

  .textCard {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #ff9601;

    margin-bottom: 5px;
  }

  .textCard2 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #3a3a3c;
  }
`;

export const InfoProduct = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;

  z-index: 5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  cursor: pointer;

  .content {
    transform: translateY(100%);
    background-color: #fefefe;
    height: 190px;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  :hover .content {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ChoiceProduct = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;

  gap: 15px;

  padding: 40px;

  h3 {
    color: #1c1c1e;

    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }

  .btnCheckGroup {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    gap: 10px;
  }

  .btnCheck {
    background-color: #fefefe;
    border: 1px solid #9a9a9a;
    color: #9a9a9a;

    font-family: "Barlow";

    font-weight: 700;
    font-size: 10px;
    line-height: 16px;

    text-align: center;
    text-transform: uppercase;

    width: 85px;
    height: 30px;
  }
`;

export const CardTeste2 = styled.div`
  .card {
    position: absolute;
    width: 300px;
    height: 300px;
    background: #000814;
    border-radius: 20px;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #ffffff;
    overflow: hidden;
    cursor: pointer;
  }

  .card h2,
  span {
    position: absolute;

    transform: translate(-50%, -50%);
  }

  .card .content {
    transform: translateY(100%);
    background-color: blue;
    height: 100px;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .card:hover .content {
    transform: translateY(0);
    opacity: 1;
  }
`;
