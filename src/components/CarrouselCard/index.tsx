import { Carousel, CarouselItem, Stack } from "react-bootstrap";
import { CardTypeProduct } from "../CardTypeProduct";
import { cardTypeData } from "../../utils/data";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const CarrouselCard = () => {
  return (
    <Carousel
      indicators={false}
      prevIcon={
        <GrLinkPrevious
          size={32}
          style={{ backgroundColor: "#CACACA", marginLeft: -260 }}
        />
      }
      nextIcon={
        <GrLinkNext
          size={32}
          style={{ backgroundColor: "#CACACA", marginRight: -260 }}
        />
      }
    >
      {cardTypeData.map((review, index) => (
        <CarouselItem interval={10000}>
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
  );
};

export { CarrouselCard };
