import { Carousel, CarouselItem, Stack } from "react-bootstrap";
import { CardTypeProduct } from "../CardTypeProduct";
import { cardTypeData } from "../../utils/data";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { Container } from "./style";

const CarrouselCard = () => {
  return (
    <Container>
      <Carousel
        indicators={false}
        prevIcon={
          <GrLinkPrevious size={32} style={{ backgroundColor: "#CACACA" }} />
        }
        nextIcon={
          <GrLinkNext size={32} style={{ backgroundColor: "#CACACA" }} />
        }
      >
        {cardTypeData.map((review, index) => (
          <CarouselItem interval={5000}>
            <Stack
              direction="horizontal"
              className="justify-content-flex-start align-items-center"
              gap={5}
            >
              {cardTypeData.map((card, index) => (
                <CardTypeProduct
                  key={index}
                  image={card.image}
                  title={card.title}
                />
              ))}
            </Stack>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
};

export { CarrouselCard };
