import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWifi, FaCoffee, FaRunning, FaShower, FaRegHeart, FaHeart, FaCar } from "react-icons/fa";
import BookButton from "./buttons/BookButton";
import ReadmoreButton from "../components/buttons/ReadmoreButton";

function PageItem({ item, setNum }) {
  const { id, name, description, image, price, type, service } = item;
  const [favourited, setFavourited] = useState(false);
  console.log(image);
  const getInformation = () => {
    let serviceArray = [];
    if (service?.includes("wifi")) serviceArray.push(<FaWifi size={18} key="wifi" />);
    if (service?.includes("coffee")) serviceArray.push(<FaCoffee size={18} key="coffee" />);
    if (service?.includes("gym")) serviceArray.push(<FaRunning size={18} key="gym" />);
    if (service?.includes("tub")) serviceArray.push(<FaShower size={18} key="tub" />);
    if (service?.includes("car")) serviceArray.push(<FaCar size={18} key="car" />);
    return serviceArray;
  };

  useEffect(() => {
    const parsedLocalstorage = JSON.parse(localStorage.getItem("wishlist"));
    setFavourited(parsedLocalstorage?.find((fav) => fav.id === id));
  }, [id]);

  const favourite = () => {
    let favs = [];
    if (JSON.parse(localStorage.getItem("wishlist"))) {
      favs = JSON.parse(localStorage.getItem("wishlist"));
    }
    if (!favs.find((fav) => fav.id === id)) {
      favs?.push(item);
      setFavourited(true);
    }
    localStorage.setItem("wishlist", JSON.stringify(favs));
    setNum(JSON.parse(localStorage.getItem("wishlist"))?.length);
  };
  const unfavourite = () => {
    const favs = JSON.parse(localStorage.getItem("wishlist"));
    localStorage.setItem("wishlist", JSON.stringify(favs.filter((fav) => fav.id !== id)));
    setFavourited(false);
    setNum(JSON.parse(localStorage.getItem("wishlist"))?.length);
  };
  return (
    <div className="accommodations-card">
      <Card>
        <div className="card-type">{type}</div>
        {image && <Card.Img variant="top" src={image.url} alt={image.alternativeText} />}
        <Card.Body>
          <Card.Title>
            <Link className="title-accommodation" to={`/page/${id}`}>
              {name}
            </Link>
            <div className="service-icons-wrapper">{getInformation()}</div>
          </Card.Title>
          <div className="save-btn">{favourited ? <FaHeart className="fav-clicked" size={30} onClick={unfavourite} /> : <FaRegHeart className="fav-unclicked" size={30} onClick={favourite} />}</div>
          <Card.Subtitle>From {price},- </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <div className="card-buttons-section">
            <Link to={`/page/${id}`}>
              <ReadmoreButton />
            </Link>
            <Link to={`/booking/${id}`}>
              <BookButton />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PageItem;
