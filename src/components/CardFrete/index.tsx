import { Button } from "react-bootstrap";
import { Container } from "./style";

interface ICardFrete {
  h1: string;
  p: string;
  image: string;
  button: string;
}

const CardFrete = ({ h1, p, image, button }: ICardFrete) => {
  return (
    <Container>
      <section>
        <h1>{h1} </h1>
        <p> {p} </p>
        <Button>{button}</Button>
      </section>
      <section>
        <img src={image} />
      </section>
    </Container>
  );
};

export { CardFrete };
