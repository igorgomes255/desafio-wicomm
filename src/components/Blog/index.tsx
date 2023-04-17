import { Button } from "react-bootstrap";
import { Container, InfosBlog } from "./style";
import { CardBlog } from "../CardBlog";
import { cardBlog } from "../../utils/data";
import { Carrousel } from "../Carrousel";
import { CarouselItem, Stack } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <InfosBlog>
        <section className="infoBlogs">
          <h4>Confira o nosso blog</h4>
          <Button>Ler todos</Button>
        </section>
        <Carrousel
          indicators={false}
          carrouselItem={cardBlog.map((team, index) => (
            <CarouselItem interval={10000}>
              <Stack
                direction="horizontal"
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "25px",
                  width: "100%",
                }}
              >
                {cardBlog.map((infos, index) => (
                  <section className="cardsTeam" key={index}>
                    <CardBlog
                      image={infos.image}
                      title={infos.title}
                      date={infos.date}
                    />
                  </section>
                ))}
              </Stack>
            </CarouselItem>
          ))}
        />
      </InfosBlog>
    </Container>
  );
};

export { Blog };
