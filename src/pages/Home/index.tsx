import { CardProduct } from "../../components/CardProduct";
import { CarrouselCard } from "../../components/CarrouselCard";
import { CarrouselCardImage } from "../../components/CarrouselCardImage";
import { Header } from "../../components/header";
import { Main, SectionCarrousel } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <CarrouselCardImage />
        <SectionCarrousel>
          <CarrouselCard />
          <CardProduct />
        </SectionCarrousel>
      </Main>
    </>
  );
};

export { Home };
