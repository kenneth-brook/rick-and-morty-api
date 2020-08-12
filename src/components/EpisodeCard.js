import React from "react";

export default function EpisodeCard(props) {
  console.log(props);
  return (
    <div className="epiCard">
      <h2>{props.name}</h2>
      <p>Episode: {props.episode}</p>
      <span>Air Date: {props.date}</span>
    </div>
  );
}
