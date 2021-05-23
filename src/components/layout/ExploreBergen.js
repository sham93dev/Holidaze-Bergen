import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExploreButton from "../buttons/ExploreButton";
import { Link } from "react-router-dom";

function ExploreBergen() {
  return (
    <div className="multi-column">
      <div className="aside-text">
        <h4>Explore Bergen</h4>
        <Link to="explore">
          <ExploreButton />
        </Link>
      </div>
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block img-fluid" src="/assets/cruise.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src="/assets/nature.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src="/assets/bergenview2.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ExploreBergen;
