import { cardGoals } from "../../utils/data";
import { CardGoals } from "../CardGoals";
import { Container } from "./style";

const Goals = () => {
  return (
    <Container>
      <h4>Objetivos</h4>
      <section className="goals">
        {cardGoals.map((goals) => (
          <CardGoals image={goals.image} title={goals.title} />
        ))}
      </section>
    </Container>
  );
};

export { Goals };
