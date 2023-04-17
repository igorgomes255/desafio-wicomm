import { CarouselItem, Stack } from "react-bootstrap";
import { cardProduct } from "../../utils/data";
import { CardProduct } from "../CardProduct";
import { Carrousel } from "../Carrousel";

const CarrouselPromo = () => {
  return (
    <Carrousel
      title="Promoções"
      carrouselItem={cardProduct.map((review, index) => (
        <CarouselItem interval={10000}>
          <Stack
            key={index}
            direction="horizontal"
            style={{
              display: "flex",
              justifyContent: "flex-start",
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
    />
  );
};

export { CarrouselPromo };
