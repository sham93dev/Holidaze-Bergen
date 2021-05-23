import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/api";
import PageItem from "./PageItems";
import { Spinner } from "react-bootstrap";

function HotelPages({ setNum }) {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setPage(json);
        } else {
          setError("Something went wrong, check your API");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="success" size="large" />
        <h3>Loading Accommodations</h3>
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <div className="pages">
      {page
        .filter((item) => item.popular)
        .map(function (item) {
          return <PageItem setNum={setNum} key={item.id} item={item} />;
        })}
    </div>
  );
}

export default HotelPages;
