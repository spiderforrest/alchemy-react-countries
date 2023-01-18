import { useEffect, useState } from 'react';
import { getCountries, getContinents } from '../services/client.js';

export function useContinents() {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getContinents();
      setContinents(response);
    };
    fetchData();
  }, []);
  return continents;
}

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchData();
  }, []);
  return countries;
}
