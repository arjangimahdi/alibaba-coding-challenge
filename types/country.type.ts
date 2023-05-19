interface CountryName {
    common: string;
    official: string;
    nativeName: { [key: string]: { [key: string]: string } };
}

export interface Country {
    name: CountryName;
    tld: string[];
    ccn3: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: { [key: string]: string };
    independent: boolean;
    population: number;
    currencies: { [key: string]: { [key: string]: string } };
    capital: string[];
    flags: { [key: string]: string };
    borders: string[];
}

export interface BorderCountry {
    name: CountryName;
    ccn3: string;
}
