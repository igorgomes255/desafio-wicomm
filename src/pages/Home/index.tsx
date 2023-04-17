import { About } from "../../components/About";
import { Blog } from "../../components/Blog";
import { CarrouselCard } from "../../components/CarrouselCard";
import { CarrouselCardImage } from "../../components/CarrouselCardImage";
import { CarrouselProduct } from "../../components/CarrouselProduct";
import { CarrouselPromo } from "../../components/CarrouselPromo";
import { Goals } from "../../components/Goals";
import { InfosTeam } from "../../components/InfoTeam";
import { Package } from "../../components/Package";
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

        <SectionCarrousel>
          <Goals />
          <Package />
        </SectionCarrousel>

        <About />
      </Main>
    </>
  );
};

export { Home };
