import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import SearchButton from "../buttons/SearchButton";
import { FaHotel } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { MdHotel } from "react-icons/md";

function SearchBar() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
    fetchData(e.target.value);
  };

  async function fetchData(filter) {
    try {
      const response = await fetch(BASE_URL);

      if (response.ok) {
        const json = await response.json();
        setResults(json.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())));
      } else {
        setError("Something went wrong, check your API");
      }
    } catch (error) {
      setError(error.toString());
    }
  }

  const onSubmit = (e) => {
    history.push("/search/" + search);
  };

  return (
    <div className="search-bar-wrapper">
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search for booking" onChange={onChange} />
        <Link to={`/accomodations`}>
          <SearchButton />
        </Link>
        {error && <ul className="auto-text">{error}</ul>}
        {search && results?.length > 0 && (
          <ul className="auto-text">
            {results.map((res) => (
              <li key={res.id}>
                <Link to={"/page/" + res.id}>{res.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </form>
      <div className="form-icons-wrapper">
        <span className="hotel">
          <FaHotel />
          Hotel
        </span>
        <span className="house">
          <GiHouse />
          Guesthouse
        </span>
        <span className="bandb">
          <MdHotel />
          Bed and Breakfast
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
