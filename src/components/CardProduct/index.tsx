import {
  Button,
  Card,
  CardImg,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import image3 from "../../assets/image3.png";
import {
  CardTeste2,
  ChoiceProduct,
  Container,
  InfoProduct,
  SectionImage,
  SectionText,
} from "./style";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const CardProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState([1, 4]);

  const handleChange = (val: number[]) => setValue(val);

  return (
    <Container
      onMouseLeave={() => setIsOpen(false)}
      onMouseOver={() => setIsOpen(true)}
    >
      <Card className="cardProduct">
        <SectionImage>
          <CardImg variant="top" src={image3} />
          <section>
            <AiOutlineStar size={25} />
            <AiOutlineShoppingCart size={25} />
          </section>
        </SectionImage>

        <SectionText>
          <Card.Title className="titleCard">
            Whey Zero (Com Lactase) Black Skull - 900G
          </Card.Title>
          <Card.Text className="textCard">R$ 349,90</Card.Text>
          <Card.Text className="textCard2">ou 12x de R$ 29,16</Card.Text>
        </SectionText>
        <InfoProduct>
          <div className="content">
            <ChoiceProduct>
              <h3>Sabor</h3>
              <ToggleButtonGroup
                className="btnCheckGroup"
                type="checkbox"
                value={value}
                onChange={handleChange}
              >
                <Button className="btnCheck" value={1}>
                  Toffee
                </Button>
                <Button className="btnCheck" value={2}>
                  Chocolate
                </Button>
                <Button className="btnCheck" value={3}>
                  Morango
                </Button>
                <Button className="btnCheck" value={4}>
                  Baunilha
                </Button>
              </ToggleButtonGroup>
            </ChoiceProduct>
          </div>
        </InfoProduct>
      </Card>

      {isOpen && <Button className="buttonComprar">Comprar</Button>}

      {/*       <CardTeste2>
        <div className="card">
          <h2>Animated card</h2>
          <span>Hover Me</span>
          <div className="card2">
            <div className="content">
              <h3>How's it goin Fam ?</h3>
              <p>
                This is Sachin Samal, your tech mate!!! I love you all. Lets
                make this world a better place for all of us. Keep
                prospering...Keep learning!!!
              </p>
            </div>
          </div>
        </div>
      </CardTeste2> */}
    </Container>
  );
};

export { CardProduct };
