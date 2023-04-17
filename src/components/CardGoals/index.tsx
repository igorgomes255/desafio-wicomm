import { Container } from "./style";
import { Card, CardImg } from "react-bootstrap";

interface ICardGoals {
  image: string;
  title: string;
}

const CardGoals = ({ image, title }: ICardGoals) => {
  return (
    <Container>
      <Card>
        <CardImg src={image} />
        <Card.ImgOverlay className="infoCard">
          <section className="sectionGoals">
            <h4>{title}</h4>
          </section>
          <div></div>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export { CardGoals };
