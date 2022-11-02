import React from "react";
import "./Synonyms.css";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <strong> Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          if (index < 3) {
            return <li key={index}>{synonym}</li>;
          }
        })}
      </ul>
    );
  } else {
    return null;
  }
}
