import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookingForm from "../../layout/BookingForm";
import Footer from "../../layout/Footer";

function Booking() {
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
    return <div>Loading page...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <section className="booking-section">
        <div className="booking-accommodations-card">
          <Card>
            <div className="card-type">{page.type}</div>
            {page.image && <Card.Img variant="top" src={page.image.url} alt={page.image.alternativeText} />}
            <Card.Body>
              <Card.Title>
                <Link className="booking-title-accommodation" to={`/page/${id}`}>
                  {page.name}
                </Link>
              </Card.Title>
              <Card.Subtitle id="booking-price">From {page.price},- </Card.Subtitle>
              <Card.Text id="booking-description">{page.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="booking-form-section">
          <BookingForm />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Booking;
