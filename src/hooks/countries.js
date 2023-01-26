import { useEffect, useState } from 'react';
import { getCountries } from '../services/client.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchData();
  }, []);
  return countries;
}
