import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchDataByQuery } from "../contexts/FetchData";

const CountriesListContext = createContext();
const FilteredListContext = createContext();
const CountryDetailsContext = createContext();

const listOfCountriesUrl = "https://travelbriefing.org/countries.json";

const getCountriesList = async () => {
  try {
    const response = await fetch(listOfCountriesUrl);
    const data = await response.json();
    console.log(data);
    return data;
    // const filterData = data.filter((element) => {
    //   return element.name !== "Anguilla";
    // });
    // return filterData;
  } catch (err) {
    console.log(err);
  }
};

export function useCountriesList() {
  return useContext(CountriesListContext);
}

export function useFilteredList() {
  return useContext(FilteredListContext);
}

export function useCountryDetails() {
  return useContext(CountryDetailsContext);
}

export default function DataProvider({ children }) {
  const [countries, setCountries] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const countries = await getCountriesList();
      // const sliceCountries = countries.slice(0, 10);
      const countriesWithImages = await Promise.all(
        countries.map(async (country) => {
          country.img = await fetchDataByQuery(country.name);
          return country;
        })
      );
      setCountries(countriesWithImages);
      setFilteredList(countriesWithImages);
    };
    getData();
  }, []);

  return (
    <CountriesListContext.Provider value={[countries, setCountries]}>
      <FilteredListContext.Provider value={[filteredList, setFilteredList]}>
        <CountryDetailsContext.Provider value={[details, setDetails]}>
          {children}
        </CountryDetailsContext.Provider>
      </FilteredListContext.Provider>
    </CountriesListContext.Provider>
  );
}
