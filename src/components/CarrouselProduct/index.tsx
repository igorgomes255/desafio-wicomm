import { Carousel, CarouselItem, Stack } from "react-bootstrap";
import { cardProduct } from "../../utils/data";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { CardProduct } from "../CardProduct";

const CarrouselProduct = () => {
  return (
    <Carousel
      prevIcon={
        <GrLinkPrevious
          size={32}
          style={{ backgroundColor: "#CACACA", marginLeft: -160 }}
        />
      }
      nextIcon={
        <GrLinkNext
          size={32}
          style={{ backgroundColor: "#CACACA", marginRight: -160 }}
        />
      }
    >
      {cardProduct.map((review, index) => (
        <CarouselItem interval={10000}>
          <Stack
            direction="horizontal"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              width: "100%",
            }}
          >
            {cardProduct.map((card, index) => (
              <CardProduct
                key={index}
                image={card.image}
                title={card.title}
                price={card.price}
                quotaPrice={card.quotaPrice}
              />
            ))}
          </Stack>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export { CarrouselProduct };
