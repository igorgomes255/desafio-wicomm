import { Carousel, CarouselItem, Stack } from "react-bootstrap";
import { cardProduct } from "../../utils/data";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { CardProduct } from "../CardProduct";

const CarrouselProduct = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Roboto Condensed",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "38px",

          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Lançamentos
      </h1>
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
    </>
  );
};

export { CarrouselProduct };
