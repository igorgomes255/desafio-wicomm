import { Button, Card, CardImg } from "react-bootstrap";
import { Container } from "./style";
import image5 from "../../assets/image5.png";

interface ICardBlog {
  image: string;
  title: string;
  date: string;
}

const CardBlog = ({ image, title, date }: ICardBlog) => {
  return (
    <Container>
      <Card className="cardBlog">
        <CardImg variant="top" src={image} />
        <Card.Body className="cardBody">
          <Card.Text className="textDate">{date}</Card.Text>
          <Card.Title className="titleCard">{title}</Card.Title>
          <Button>Ler mais</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export { CardBlog };
