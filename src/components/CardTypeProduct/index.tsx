import { Container } from "./style";

interface ICardType {
  image: string;
  title: string;
}

const CardTypeProduct = ({ image, title }: ICardType) => {
  return (
    <Container>
      <section>
        <div></div>
        <img src={image} />
      </section>
      <p>{title}</p>
    </Container>
  );
};

export { CardTypeProduct };
