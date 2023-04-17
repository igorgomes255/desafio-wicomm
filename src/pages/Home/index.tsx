import { Blog } from "../../components/Blog";
import { CarrouselCard } from "../../components/CarrouselCard";
import { CarrouselCardImage } from "../../components/CarrouselCardImage";
import { CarrouselProduct } from "../../components/CarrouselProduct";
import { CarrouselPromo } from "../../components/CarrouselPromo";
import { InfosTeam } from "../../components/InfoTeam";
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
          <CarrouselProduct />
        </SectionCarrousel>

        <InfosTeam />

        <SectionCarrousel>
          <CarrouselPromo />
        </SectionCarrousel>

        <Blog />
      </Main>
    </>
  );
};

export { Home };
