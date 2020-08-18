import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  let pageAddress = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {
    axios.get(`${pageAddress}`).then((res) => {
      setCharacters(res.data.results);
      setInfo(res.data.info);
    });
  }, [pageAddress]);

  console.log(info.next);
  return (
    <section className="character-list grid-view">
      <div className="pageNav">
        <button className="arrowLeft">
          <h1>Previous</h1>
          <h1>
            <FaArrowLeft />
          </h1>
        </button>
        <button className="arrowRight" onClick={(pageAddress = info.next)}>
          <h1>Next</h1>
          <h1>
            <FaArrowRight />
          </h1>
        </button>
      </div>
      {characters.map((char) => {
        return (
          <CharacterCard
            key={char.name}
            name={char.name}
            image={char.image}
            location={char.location}
            status={char.status}
            origin={char.origin}
          />
        );
      })}
    </section>
  );
}
