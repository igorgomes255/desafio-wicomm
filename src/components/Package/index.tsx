import { packageCards } from "../../utils/data";
import { CardFrete } from "../CardFrete";
import { Container } from "./style";

const Package = () => {
  return (
    <Container>
      {packageCards.map((card) => (
        <CardFrete
          h1={card.name}
          p={card.subname}
          button={card.button}
          image={card.image}
        />
      ))}
    </Container>
  );
};

export { Package };
