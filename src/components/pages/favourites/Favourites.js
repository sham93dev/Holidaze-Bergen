import React from "react";
import FavouritesPage from "../../layout/FavouritesPage";
import Footer from "../../layout/Footer";

function Favourites({ setNum }) {
  return (
    <div>
      <FavouritesPage setNum={setNum} />
      <Footer />
    </div>
  );
}

export default Favourites;
