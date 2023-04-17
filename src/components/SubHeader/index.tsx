import { Container } from "./style";
import { TbTruck } from "react-icons/tb";

const SubHeader = () => {
  return (
    <Container>
      <p>Fale Conosco</p>
      <section>
        <TbTruck color="#FF9601" size={20} />
        <span>Frete grátis a partir de R$ 199,90 para todo Brasil</span>
      </section>
      <h4>Blog.Blackskull</h4>
    </Container>
  );
};

export { SubHeader };
