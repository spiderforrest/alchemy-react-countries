import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export async function getCountries() {
  const response = await client.from('countries').select('*');
  return checkError(response);
}

export async function getContinents() {
  const response = await client.from('countries').select('*');
  const checked = checkError(response);
  // mmm i love spagetti
  // this takes the contries and iterates over it pulling out each continent
  // that leaves a massive array that Set removes all the duplicates from
  const filtered = [...new Set(checked.map((continent) => continent.continent))];
  // and then some have null as the content so i'm filtering by the content-that anon function
  // returns the content and if it's null nope
  const moreFiltered = filtered.filter((a) => {
    return a;
  });
  return moreFiltered;
}

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
