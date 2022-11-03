import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </a>
      <br />
      <h2>{props.phonetic.text}</h2>
    </div>
  );
}
