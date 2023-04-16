import { Container, InfoTeam } from "./style";
import { Card, CardImg } from "react-bootstrap";
import image4 from "../../assets/image4.png";
import { CardTeam } from "../CardTeam";

const InfosTeam = () => {
  return (
    <Container>
      <Card>
        <CardImg src={image4} />
        <Card.ImgOverlay>
          <InfoTeam>
            <h4>Conheça a tropa black skull</h4>
            <section className="cardsTeam">
              <CardTeam />
              <CardTeam />
              <CardTeam />
            </section>
          </InfoTeam>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export { InfosTeam };
