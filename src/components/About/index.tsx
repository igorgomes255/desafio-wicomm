import { Container } from "./style";
import logo2 from "../../assets/logo2.png";

const About = () => {
  return (
    <Container>
      <figure>
        <img src={logo2} alt="" />
        <h3>Sobre a black skull</h3>
      </figure>

      <section>
        <p>
          A Black Skull USA é uma marca de suplementos alimentares com foco em
          atletas de alta performance. Nossa sede no Brasil está alocada em Embu
          das Artes – SP, com mais de 12.000 m² de área construída, com alta
          capacidade produtiva. Nossos produtos trabalham com as melhores
          matérias-primas do mercado e tem como principal característica maior
          concentração de insumos, que proporcionam níveis de pureza mais altos
          e por consequência otimizam a qualidade de nossos produtos.
        </p>
      </section>
    </Container>
  );
};

export { About };
