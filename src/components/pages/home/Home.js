import React from "react";
import ExploreBergen from "../../layout/ExploreBergen";
import HeroContainer from "../../layout/HeroContainer";
import ServiceSection from "../../layout/ServiceSection";
import Footer from "../../layout/Footer";
import PopularAccommodations from "../../layout/PopularAccommodations";
import BergenKommuneHero from "../../layout/BergenKommuneHero";

function Home({ setNum }) {
  return (
    <>
      <div className="homepage">
        <HeroContainer />
        <ExploreBergen />
        <ServiceSection />
        <PopularAccommodations setNum={setNum} />
        <BergenKommuneHero />
        <Footer />
      </div>
    </>
  );
}

export default Home;
