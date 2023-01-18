import React, { useState } from 'react';
import Tile from './Tile.js';
import { useCountries, useContinents } from '../hooks/countries.js';

export default function Main() {
  const countries = useCountries();
  const continents = useContinents();
  const [filter, setFilter] = useState('');

  return (
    <div className="Main">
      <select onChange={(e) => setFilter(e.target.value)}>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      {countries
        .filter((country) => country.continent === filter || filter === '')
        .map((country) => (
          <Tile key={country.id} {...country} />
        ))}
    </div>
  );
}
