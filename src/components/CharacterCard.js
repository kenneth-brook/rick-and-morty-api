import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="card">
      <div className="imageWrap">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="contentWrap">
        <h3>{props.name}</h3>
        <p style={{ color: "silver" }}>{props.status}</p>
        <p>Location: {props.location.name}</p>
        <br />
        <p>Origin: {props.origin.name}</p>
      </div>
    </div>
  );
}
