import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaMapSigns, FaRegGrinWink } from "react-icons/fa";
function ServiceSection() {
  return (
    <div className="service-section-wrapper">
      <div className="service-icons">
        <span>
          <BiSupport />
          <p>24/7 Support</p>
        </span>
        <span>
          <FaMapSigns />
          <p>Most Popular Locations</p>
        </span>
        <span>
          <FaRegGrinWink />
          <p>Satisfaction Guarantee</p>
        </span>
      </div>
    </div>
  );
}

export default ServiceSection;
