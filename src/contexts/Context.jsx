import React, { createContext, useContext, useState, useEffect } from "react";

const CountriesListContext = createContext();

const listOfCountriesUrl = "https://travelbriefing.org/countries.json";

const countriesList = async () => {
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

export default function DataProvider({ children }) {
  const [countries, setCountries] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await countriesList();
      setCountries(response);
    };
    getData();
  }, []);

  return (
    <CountriesListContext.Provider value={countries}>
      {children}
    </CountriesListContext.Provider>
  );
}
