import { Carousel } from "react-bootstrap";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { ReactNode } from "react";

interface ICarrousel {
  carrouselItem: ReactNode;
  title?: string;
  indicators?: boolean;
}

const Carrousel = ({ carrouselItem, title, indicators }: ICarrousel) => {
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
          marginTop: "50px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {title}
      </h1>
      <Carousel
        prevIcon={
          <GrLinkPrevious
            size={32}
            style={{ backgroundColor: "#CACACA", marginLeft: -265 }}
          />
        }
        nextIcon={
          <GrLinkNext
            size={32}
            style={{ backgroundColor: "#CACACA", marginRight: -265 }}
          />
        }
        indicators={indicators}
      >
        {carrouselItem}
      </Carousel>
    </>
  );
};

export { Carrousel };
