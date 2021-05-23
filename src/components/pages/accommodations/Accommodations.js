import React from "react";
import Accommodations from "../../layout/AccommodationPage";
import Footer from "../../layout/Footer";

function Allaccommodations({ setNum }) {
  return (
    <div className="accommodation-page-wrapper">
      <Accommodations setNum={setNum} />
      <Footer />
    </div>
  );
}

export default Allaccommodations;
