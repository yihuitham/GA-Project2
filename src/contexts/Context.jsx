import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchDataByQuery } from "../pages/FetchData";

const CountriesListContext = createContext();
const CountryDetailsContext = createContext();

const listOfCountriesUrl = "https://travelbriefing.org/countries.json";

const getCountriesList = async () => {
  try {
    const response = await fetch(listOfCountriesUrl);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export function useCountriesList() {
  return useContext(CountriesListContext);
}

export function useCountryDetails() {
  return useContext(CountryDetailsContext);
}

export default function DataProvider({ children }) {
  const [countries, setCountries] = useState("");
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const countries = await getCountriesList();
      const sliceCountries = countries.slice(0, 10);
      const countriesWithImages = await Promise.all(
        sliceCountries.map(async (country) => {
          country.img = await fetchDataByQuery(country.name);
          return country;
        })
      );
      setCountries(countriesWithImages);
    };
    getData();
  }, []);

  return (
    <CountriesListContext.Provider value={countries}>
      <CountryDetailsContext.Provider value={[details, setDetails]}>
        {children}
      </CountryDetailsContext.Provider>
    </CountriesListContext.Provider>
  );
}
