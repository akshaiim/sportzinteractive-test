import React, { useEffect, useState } from "react";
import Playerlist from "./playerlist";

export default function Player() {
  const [player, setPlayer] = useState([]);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(
    () =>
      fetch("https://api.npoint.io/d6bd0efc05639084eb17/")
        .then((res) => res.json())
        .then((res) => setPlayer(res.playerList)),
    []
  );

  return (
    <div>
      <input
        className="search"
        type="text"
        value={name}
        placeholder="search player..."
        onChange={handleChange}
      />
      {player
        .filter(
          (item) =>
            item.PFName.toLowerCase().includes(name.toLowerCase()) ||
            item.TName.toLowerCase().includes(name.toLowerCase())
        )
        .map((item, index) => (
          
          <Playerlist
            key={index}
            item={item}
            match={item.UpComingMatchesList}
          />
        ))}
    </div>
  );
}
