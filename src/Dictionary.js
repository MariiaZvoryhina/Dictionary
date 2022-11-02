import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function load() {
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <label>What word do you want to look up?</label>
          <form onSubmit={search}>
            <input
              type="search"
              placeholder="Search for a word"
              className="form-control search-input"
              onChange={handleKeywordChange}
            />
          </form>
          <small class="hint">i.e. paris, wine, yoga, coding</small>
        </section>
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
