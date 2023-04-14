import { Container, InfoCard } from "./style";
import { Card, CardImg, CardImgOverlay, Button } from "reactstrap";
import image1 from "../../assets/image1.png";

const CardImage = () => {
  return (
    <Container>
      <Card inverse>
        <CardImg src={image1} />
        <CardImgOverlay>
          <InfoCard>
            <h2>AJUDANDO VOCÊ A TER MAIS PERFORMANCE</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
            <Button className="button">CONFIRA</Button>
          </InfoCard>
        </CardImgOverlay>
      </Card>
    </Container>
  );
};

export { CardImage };
