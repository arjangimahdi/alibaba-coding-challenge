export async function fetchAllCountries() : Promise<any> {
  return useFetch('https://restcountries.com/v3.1/all');
}