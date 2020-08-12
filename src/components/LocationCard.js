import React from "react";
import { Card, Button } from "semantic-ui-react";
import styled from "styled-components";

export default function LocationCard({ name, dimension, residents }) {
  return (
    <div className="locCard">
      <h2>{name}</h2> <br />
      <p>{dimension}</p>
      <button>Residents: {residents}</button>
    </div>
  );
}
