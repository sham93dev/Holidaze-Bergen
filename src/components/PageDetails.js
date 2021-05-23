import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/api";
import { Carousel } from "react-bootstrap";
import GoBackButton from "./buttons/GoBackButton";
import BookButton from "../components/buttons/BookButton";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Footer from "./layout/Footer";

function PageDetails() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = BASE_URL + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setPage(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="success" size="large" />
        <h3>Loading Accommodations</h3>
      </div>
    );
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <div className="accomodation-detail-wrapper">
        <div className="page-detail-items">
          <div className="carousel-wrapper">
            <Carousel interval={null} className="details-carousel">
              <Carousel.Item className="details-carousel-item">
                <img className="d-block w-40" src={page?.image?.url} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item className="details-carousel-item">
                <img className="d-block w-40" src={page?.slider[0]?.url} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item className="details-carousel-item">
                <img className="d-block w-40" src={page?.slider[1]?.url} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="page-detail-info">
            <h1>{page.name}</h1>
            <h3>{page.type}</h3>
            <p>{page.description}</p>
            <h4>
              <strong> Price: {page.price} NOK </strong>
            </h4>
            <div className="card-buttons-section">
              <Link to={`/accomodations`}>
                <GoBackButton />
              </Link>
              <Link to={`/booking/${id}`}>
                <BookButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageDetails;
