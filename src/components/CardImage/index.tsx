import { Container, InfoCard } from "./style";
import { Card, CardImg, Button } from "react-bootstrap";

interface ICardImage {
  image: string;
  title: string;
  subtitle: string;
}

const CardImage = ({ image, title, subtitle }: ICardImage) => {
  return (
    <Container>
      <Card>
        <CardImg src={image} />
        <Card.ImgOverlay>
          <InfoCard>
            <h2> {title} </h2>
            <p>{subtitle}</p>
            <Button className="button">CONFIRA</Button>
          </InfoCard>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export { CardImage };
