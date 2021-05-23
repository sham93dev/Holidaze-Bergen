import React, { useState, useEffect } from "react";
import PageItem from "../PageItems";

function FavouritesPage({ setNum }) {
  const [wishlist, setWishlist] = useState(null);
  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")));
  }, []);

  return (
    <div className="favourites-wrapper">
      <h1>Your favourites</h1>
      <hr className="orange-line-2" />
      <div className="favourites-items">{wishlist && wishlist.length > 0 ? wishlist.map((hotel) => <PageItem setNum={setNum} item={hotel} key={hotel.id} />) : "No favourite enquiry choosen"}</div>
    </div>
  );
}

export default FavouritesPage;
