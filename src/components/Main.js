import React, { useState } from 'react';
import Tile from './Tile.js';
import { useCountries } from '../hooks/countries.js';

export default function Main() {
  const countries = useCountries();
  const [filter, setFilter] = useState('');
  // mmm i love spagetti
  // this takes the contries and iterates over it pulling out each continent
  // that leaves a massive array that Set removes all the duplicates from
  // and then some have null as the content so i'm filtering by the content-that anon function
  // returns the content and if it's null nope
  const continents = [...new Set(countries.map((country) => country.continent))].filter(
    (continent) => {
      return continent;
    }
  );

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
