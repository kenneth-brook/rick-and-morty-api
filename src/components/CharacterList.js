import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [noPrev, setNoPrev] = useState();
  let noNext = info.next;

  function arrowRender(noPrev, noNext) {
    if (noPrev === null) {
      document.getElementsByClassName("arrowLeft")[0].style = {
        color: "white",
      };
    } else {
      document.getElementsByClassName("arrowLeft")[0].style = {
        color: "black",
      };
    }

    if (noNext === "null") {
      document.getElementsByClassName("arrowRight")[0].style = {
        display: "none",
      };
    } else {
      document.getElementsByClassName("arrowRight")[0].style = {
        display: "block",
      };
    }
  }

  useEffect(() => {
    async function getData() {
      await axios.get(`${page}`).then((res) => {
        setCharacters(res.data.results);
        setInfo(res.data.info);
        setNoPrev(res.data.info.prev);
      });
    }
    getData();
    arrowRender();
  }, [page, noPrev]);

  return (
    <section className="character-list grid-view">
      <div className="pageNav">
        <button className="arrowLeft" onClick={() => setPage(info.prev)}>
          <h1>Previous</h1>
          <h1>
            <FaArrowLeft />
          </h1>
        </button>
        <button className="arrowRight" onClick={() => setPage(info.next)}>
          <h1>Next</h1>
          <h1>
            <FaArrowRight />
          </h1>
        </button>
      </div>
      {characters.map((char) => {
        return (
          <CharacterCard
            key={char.id}
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
