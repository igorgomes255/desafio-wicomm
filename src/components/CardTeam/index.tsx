import { Container } from "./style";
import team1 from "../../assets/team1.png";

interface ICardTeam {
  image: string;
}

const CardTeam = ({ image }: ICardTeam) => {
  return (
    <Container>
      <img src={image} alt="" />
    </Container>
  );
};

export { CardTeam };
