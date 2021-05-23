import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";
import PageItem from "../../PageItems";

function Search({ setNum }) {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const { search } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);

        if (response.ok) {
          const json = await response.json();
          setResults(json.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
        } else {
          setError("Something went wrong, check your API");
        }
      } catch (error) {
        setError(error.toString());
      }
    }
    fetchData();
  }, [search]);

  return (
    <div className="pages">
      {results?.length > 0 && results.map((res) => <PageItem setNum={setNum} key={res.id} item={res} />)}
      {error && error}
    </div>
  );
}

export default Search;
