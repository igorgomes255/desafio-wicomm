import { Container, InfoTeam } from "./style";
import { Button, Card, CardImg } from "react-bootstrap";
import image4 from "../../assets/image4.png";
import { CardTeam } from "../CardTeam";
import { Carrousel } from "../Carrousel";
import { CarouselItem, Stack } from "react-bootstrap";
import { cardTeam } from "../../utils/data";

const InfosTeam = () => {
  return (
    <Container>
      <Card>
        <CardImg style={{ height: "461px" }} src={image4} />
        <Card.ImgOverlay>
          <InfoTeam>
            <h4>Conheça a tropa black skull</h4>
            <Carrousel
              indicators={false}
              carrouselItem={cardTeam.map((team, index) => (
                <CarouselItem interval={10000}>
                  <Stack
                    direction="horizontal"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "25px",
                      width: "100%",
                    }}
                  >
                    {cardTeam.map((team, index) => (
                      <section className="cardsTeam" key={index}>
                        <CardTeam image={team.image} />
                      </section>
                    ))}
                  </Stack>
                </CarouselItem>
              ))}
            />
            <Button className="buttonSeeAll">Ver Todos</Button>
          </InfoTeam>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export { InfosTeam };
