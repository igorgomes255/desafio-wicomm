import { Input, Button } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/master_card.png";
import mercadoPago from "../../assets/mercado_pago.png";
import hiperCard from "../../assets/hipercard.png";
import pix from "../../assets/pix.png";
import amex from "../../assets/amex.png";
import redeCard from "../../assets/redecard.png";
import elo from "../../assets/elo.png";
import boleto from "../../assets/boleto.png";
import security1 from "../../assets/security1.png";
import security2 from "../../assets/security2.png";
import { AsideContainer, Container, SectionContainer } from "./style";
import logo from "../../assets/logo.png";

const SubFooter = () => {
  return (
    <Container>
      <SectionContainer>
        <section className="followUs">
          <img src={logo} />
          <p>Nos siga:</p>
          <figure>
            <AiFillFacebook size={24} color="white" />
            <AiFillInstagram size={24} color="white" />
            <AiFillYoutube size={24} color="white" />
            <AiFillTwitterSquare size={24} color="white" />
            <TbBrandTiktok size={20} style={{ backgroundColor: "white" }} />
          </figure>
        </section>

        <section>
          <section className="links">
            <section className="linksContainer">
              <p>Blackskull USA</p>
              <a href="">Sobre Nós</a>
              <a href="">Black Skull é confiável?</a>
              <a href="">Atletas Black Skull</a>
              <a href="">Nosso Blog</a>
              <a href="">Seja um Revendedor</a>
              <a href="">Entre em Contato</a>
            </section>

            <section className="linksContainer">
              <p>Institucional</p>
              <a href="">Trocas e Devoluções</a>
              <a href="">Política de Entregas</a>
              <a href="">Política de Privacidade</a>
              <a href="">Política de Cancelamentos</a>
            </section>

            <section className="linksContainer">
              <p>Afiliados</p>
              <a href="">Programa de Afiliados</a>
              <a href="">Desconto para Militares</a>
              <a href="">Benefícios para Profissionais da Saúde</a>
              <a href="">Benefícios para Profs. de Educação Física</a>
              <a href="">Assinaturas</a>
            </section>
          </section>

          <section className="paymentsSecurity">
            <section className="payments">
              <p>Formas de Pagamento</p>

              <section className="FormPayment">
                <img src={mercadoPago} />
                <img src={visa} />
                <img src={masterCard} />
                <img src={hiperCard} />
                <img src={pix} />
                <img src={amex} />
                <img src={redeCard} />
                <img src={elo} />
                <img src={boleto} />
              </section>
            </section>

            <section className="security">
              <p>Segurança</p>

              <section className="securityImages">
                <img src={security1} />
                <img src={security2} />
              </section>
            </section>
          </section>
        </section>
      </SectionContainer>

      <AsideContainer>
        <h1>Fique por</h1>
        <p>dentro</p>
        <span>
          Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e
          muito mais!
        </span>
        <Input placeholder="Digite seu nome" className="inputFooter" />
        <Input placeholder="Digite seu e-mail" className="inputFooter" />
        <Button>Enviar</Button>
      </AsideContainer>
    </Container>
  );
};

export { SubFooter };
