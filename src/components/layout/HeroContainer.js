import React from "react";
import SearchBar from "./SearchBar";

function HeroContainer() {
  return (
    <div className="hero-wrapper">
      <video src="/assets/bergenloop2.mp4" autoPlay loop muted />
      <div className="hero-content">
        <h1>Welcome to Bergen</h1>
        <span>
          <p>Book among the most attractive places in Bergen. </p>
        </span>
        <SearchBar />
      </div>
    </div>
  );
}

export default HeroContainer;
