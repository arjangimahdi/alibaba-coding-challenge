interface CountryName {
    common: string;
    official: string;
    nativeName: any;
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
}

export interface BorderCountry {
    name: CountryName;
    ccn3: string;
}
