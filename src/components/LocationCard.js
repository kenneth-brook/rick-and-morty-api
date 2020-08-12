import React from "react";

export default function LocationCard({ name, dimension, residents }) {
  return (
    <div className="locCard">
      <h2>{name}</h2> <br />
      <p>{dimension}</p>
      <button>Residents: {residents}</button>
    </div>
  );
}
