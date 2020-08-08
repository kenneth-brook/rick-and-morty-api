import React from "react";
import { Link } from "react-router-dom";

export default function TabNav() {
  return (
    <div className="topNav">
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/characters">
          <button>Characters</button>
        </Link>
        <Link to="/locations">
          <button>Locations</button>
        </Link>
        <Link to="/episodes">
          <button>Episodes</button>
        </Link>
      </nav>
    </div>
  );
}
