import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import PageItem from "../PageItems";
import { Spinner } from "react-bootstrap";
import axios from "axios";

export default function Accommodations({ setNum }) {
  const [page, setPage] = useState([]);
  const [allPages, setAllPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showItems, setShowItems] = useState(100);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
        setPage(response.data);
        setAllPages(response.data);
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
  const onChange = (event) => {
    if (event.target.value === "all") {
      setPage(allPages);
    } else {
      setPage(allPages.filter((page) => page.type === event.target.value));
    }
    setShowItems(100);
  };
  const onChangeNum = (event) => {
    if (event.target.value === "all") {
      setShowItems(9999);
    } else {
      setShowItems(parseInt(event.target.value));
    }
  };
  return (
    <>
      <div className="accommodations-all">
        <h1>Accommodations</h1>
        <hr className="orange-line-2" />

        <label>
          <select onChange={onChange}>
            <option value="all">All accommodations</option>
            <option value="Hotel">Hotel</option>
            <option value="Guesthouse">Guesthouse</option>
            <option value="Bed and Breakfast">Bed and Breakfast</option>
          </select>
        </label>
        <label>
          <select id="prpage" onChange={onChangeNum}>
          <option value="all">All</option>
            <option value="16">16</option>
            <option value="12">12</option>
            <option value="6">6</option>
          </select>
        </label>
        <div className="pages">
          {page.map((item, idx) => {
            console.log(showItems > idx);
            if (showItems > idx) {
              return <PageItem setNum={setNum} key={item.id} item={item} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}
