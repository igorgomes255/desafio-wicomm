import { CarrouselCard } from "../../components/CarrouselCard";
import { CarrouselCardImage } from "../../components/CarrouselCardImage";
import { CarrouselProduct } from "../../components/CarrouselProduct";
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
        </SectionCarrousel>
        <CarrouselProduct />
      </Main>
    </>
  );
};

export { Home };
