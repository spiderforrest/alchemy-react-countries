import React from 'react';
import Tile from './Tile.js';
import { useCountries, useContinents } from '../hooks/countries.js';

export default function Main() {
  const countries = useCountries();
  const continents = useContinents();

  return (
    <div className="Main">
      <select>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      {countries.map((country) => (
        <Tile key={country.id} {...country} />
      ))}
    </div>
  );
}
