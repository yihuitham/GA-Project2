import React, { createContext, useContext, useState, useEffect } from "react";
// import { fetchDataByQuery } from "../contexts/FetchData";
import { fetchPixabayByQuery } from "./PixabayData";

const CountriesListContext = createContext();
const FilteredListContext = createContext();
const CountryDetailsContext = createContext();

const listOfCountriesUrl = "https://travelbriefing.org/countries.json";
const countriesToExclude = [
  "Anguilla",
  "American Samoa",
  "Bouvet Island",
  "Cameroon",
  "Central African Republic",
  "Cocos Islands",
  "Congo-Brazzaville",
  "Congo-Kinshasa",
];

const getCountriesList = async () => {
  try {
    const response = await fetch(listOfCountriesUrl);
    const data = await response.json();
    // console.log(data);
    const filterData = data.filter((country) => {
      return !countriesToExclude.find((xCountry) => {
        return xCountry === country.name;
      });
    });
    return filterData;
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
      const sliceCountries = countries.slice(0, 50);
      const countriesWithImages = await Promise.all(
        sliceCountries.map(async (country) => {
          country.img = await fetchPixabayByQuery(country.name);
          // console.log(country);
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
