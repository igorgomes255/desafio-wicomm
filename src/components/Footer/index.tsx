import { Container } from "./style";
import logo_wicomm from "../../assets/logo_wicomm.png";
import logo_vtex from "../../assets/logo_vtex.png";
import { SubFooter } from "../SubFooter";

const Footer = () => {
  return (
    <>
      <SubFooter />
      <Container>
        <p>Black Skull 2022. Todos os direitos reservados.</p>

        <figure>
          <img src={logo_wicomm} alt="" />
          <img src={logo_vtex} alt="" />
        </figure>
      </Container>
    </>
  );
};

export { Footer };
