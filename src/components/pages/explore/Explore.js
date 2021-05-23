import React from "react";
import Footer from "../../layout/Footer";
import CardsContainer from "../../layout/CardsContainer";
import ReadmoreButton from "../../buttons/ReadmoreButton";

function Explore() {
  return (
    <>
      <div className="explore-page-wrapper">
        <h1>Explore our City</h1>
        <img src="./assets/bergen2.jpg" alt="View of bergen city" />
        <p>
          Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi,
          sit amet lobortis sapien sapien non mi Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet
        </p>
      </div>
      <section className="explore-bergen-section">
        <div className="explore-page-items">
          <h2>Nature all around</h2>
          <p>Sit amet lobortis sapien sapien non mi Donec diam neque, vestibulum eget, Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi</p>
          <ReadmoreButton />
        </div>
        <div className="explore-page-items2">
          <video src="/assets/bergen.mp4" autoPlay loop muted />
        </div>
      </section>
      <div className="bergen-information">
        <CardsContainer />
      </div>
      <Footer />
    </>
  );
}

export default Explore;
