import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export async function getCountries() {
  const response = await client.from('countries').select('*');
  return checkError(response);
}

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
