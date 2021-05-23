import React from "react";
import HotelPages from "../HotelPages";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";

function PopularAccommodations({ setNum }) {
  return (
    <>
      <div className="popular-wrapper">
        <h2>Popular Accommodations</h2>
        <hr className="orange-line" />
        <HotelPages setNum={setNum} />
        <Link to={`/accomodations`}>
          <PrimaryButton />
        </Link>
      </div>
    </>
  );
}

export default PopularAccommodations;
