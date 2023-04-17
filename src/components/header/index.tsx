import { Container, Links, SectionContainer } from "./style";
import logo from "../../assets/logo.png";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { SubHeader } from "../SubHeader";

const Header = () => {
  return (
    <SectionContainer>
      <SubHeader />
      <Container>
        <img src={logo} alt="Logo Black Skull" />
        <Links>
          <p>CATEGORIAS</p>
          <p>VESTUÁRIO</p>
          <p>OBJETIVOS</p>
          <p>PROMOÇÕES</p>
          <p>ATLETAS</p>
          <p>ASSINATURA</p>
        </Links>

        <InputGroup className="input">
          <Input placeholder="Buscar" />
          <InputRightElement children={<AiOutlineSearch color="#9A9A9A" />} />
        </InputGroup>
        <section className="icons">
          <BiUserCircle color="#9A9A9A" size={24} />
          <AiOutlineStar color="#9A9A9A" size={24} />
          <AiOutlineShoppingCart color="#9A9A9A" size={24} />
        </section>
      </Container>
    </SectionContainer>
  );
};

export { Header };
