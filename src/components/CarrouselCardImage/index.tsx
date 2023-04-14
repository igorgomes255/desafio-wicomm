import { Carousel, CarouselItem } from "react-bootstrap";
import { CardImage } from "../CardImage";
import { cardImageData } from "../../utils/data";

const CarrouselCardImage = () => {
  return (
    <Carousel controls={false}>
      {cardImageData.map((card) => (
        <CarouselItem interval={5000}>
          <CardImage
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export { CarrouselCardImage };
