// HeroesComponent.jsx
import React, { useState } from "react";
import "../components/HeroesComponent.css";

export default function HeroesComponent() {
  const [heroes, setHeroes] = useState([]);
  const [newHeroName, setNewHeroName] = useState("");

  const addHero = () => {
    if (newHeroName.trim() === "") {
      return;
    }

    const newHero = { name: newHeroName };
    setHeroes([...heroes, newHero]);
    setNewHeroName("");
  };

  const renderHeroes = () => {
    return heroes.map((hero, index) => (
      <div key={index}>
        <span>{hero.name}</span>
        <button onClick={() => removeHero(index)}>Remove</button>
      </div>
    ));
  };

  const removeHero = (index) => {
    const updatedHeroes = [...heroes];
    updatedHeroes.splice(index, 1);
    setHeroes(updatedHeroes);
  };

  return (
    <div className="heroes-container">
      <h1>Heroes</h1>
      <div>
        <input
          type="text"
          value={newHeroName}
          onChange={(e) => setNewHeroName(e.target.value)}
          placeholder="Enter hero name..."
        />
        <button onClick={addHero}>Add Hero</button>
      </div>
      {renderHeroes()}
    </div>
  );
}
