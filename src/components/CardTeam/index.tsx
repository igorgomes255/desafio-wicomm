import { Card, CardImg } from "react-bootstrap";
import { Container, InfoTeam, Team } from "./style";
import { AiOutlineArrowRight } from "react-icons/ai";

interface ICardTeam {
  image: string;
  name: string;
}

const CardTeam = ({ image, name }: ICardTeam) => {
  return (
    <Container>
      <Card>
        <CardImg src={image} />
        <Card.ImgOverlay style={{ padding: 0 }}>
          <InfoTeam>
            <div className="content">
              <Team>
                <p>{name}</p>
                <span>
                  Mais informações <AiOutlineArrowRight size={20} />
                </span>
              </Team>
            </div>
          </InfoTeam>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export { CardTeam };
