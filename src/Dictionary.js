import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey = `563492ad6f9170000100000120f3ed306b7148308bfcb9582039e797`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <label>What word do you want to look up?</label>
          <form onSubmit={handleSubmit}>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
