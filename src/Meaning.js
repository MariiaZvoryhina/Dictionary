import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="mt-3">
        <h3>{props.meaning.partOfSpeech}</h3>

        <p>{props.meaning.definitions[0].definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
