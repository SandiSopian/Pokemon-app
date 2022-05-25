import React from "react";

const Pokeinfo = () => {
  return (
    <>
      <h1>Bulbasaur</h1>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="poke-img" />
      <div className="abilities">
        <div className="group">
          <h2>overgrow</h2>
        </div>
        <div className="group">
          <h2>chlorophyll</h2>
        </div>
      </div>
      <div className="base-state">
        <h3>Hp:45</h3>
        <h3>attack:49</h3>
        <h3>defense:49</h3>
        <h3>special-attack:65</h3>
        <h3>special-defense:65</h3>
        <h3>speed:45</h3>
      </div>
    </>
  );
};

export default Pokeinfo;
