export async function fetchAllCountries(): Promise<any> {
    return useFetch("https://restcountries.com/v3.1/all");
}
export async function fetchCountryByCode(code: string): Promise<any> {
    return useFetch(`https://restcountries.com/v3.1/alpha/${code}`);
}
export async function fetchCountryBorders(codes: string): Promise<any> {
    return useFetch(`https://restcountries.com/v3.1/alpha/?codes=${codes}`);
}
