import React from 'react';
import Tile from './Tile.js';
import { useCountries } from '../hooks/countries.js';

export default function Main() {
  const response = useCountries();

  return (
    <div className="Main">
      {response.map((country) => (
        <Tile key={country.id} {...country} />
      ))}
    </div>
  );
}
