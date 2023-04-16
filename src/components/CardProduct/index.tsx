import { Button, Card, CardImg, ToggleButtonGroup } from "react-bootstrap";
import {
  ChoiceProduct,
  Container,
  InfoProduct,
  SectionImage,
  SectionText,
} from "./style";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

interface ICardProduct {
  image: string;
  title: string;
  price: string;
  quotaPrice: string;
}

const CardProduct = ({ image, title, price, quotaPrice }: ICardProduct) => {
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
          <CardImg variant="top" src={image} />
          <section>
            <AiOutlineStar size={25} />
            <AiOutlineShoppingCart size={25} />
          </section>
        </SectionImage>

        <SectionText>
          <Card.Title className="titleCard">{title}</Card.Title>
          <Card.Text className="textCard">{price} </Card.Text>
          <Card.Text className="textCard2">{quotaPrice}</Card.Text>
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
    </Container>
  );
};

export { CardProduct };
