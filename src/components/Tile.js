import React from 'react';

export default function Tile({ continent, iso2, name }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/72x54/${iso2.toLowerCase()}.png`}></img>
      <p>{continent}</p>
    </div>
  );
}
