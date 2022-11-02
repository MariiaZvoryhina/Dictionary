import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
