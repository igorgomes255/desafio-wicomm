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
        </SectionCarrousel>
      </Main>
    </>
  );
};

export { Home };
