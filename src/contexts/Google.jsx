// const APIKey = "AIzaSyCnuIOZ36z_iQV2o54dz9n1oht7FWXKP48";
// const searchEngineID = "1323c5df26a436a65";

// const URL = `https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${searchEngineID}&q=lectures`;

// const fetchGoogleData = async () => {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log("data: ", data);
//   } catch (err) {
//     console.log("error: ", err);
//   }
// };

// fetchGoogleData();

// const SerpApi = require("google-search-results-nodejs");
// const search = new SerpApi.GoogleSearch("secret_api_key");

// const params = {
//   engine: "google",
//   q: "afghanistan vacation",
//   google_domain: "google.com",
//   gl: "us",
//   hl: "en",
//   tbm: "isch",
// };

// const callback = function (data) {
//   console.log(data);
// };

// // Show result as JSON
// search.json(params, callback);

// const SerpApi = require("google-search-results-nodejs");
// const search = new SerpApi.GoogleSearch(
//   "ea7b5981c3f18232e0f1c67d7eb3fc98063b28eeea7751ba05564f64a46016ae"
// );

// const params = {
//   q: "Apple",
//   tbm: "isch",
//   ijn: "0",
// };

// const callback = function (data) {
//   console.log(data["images_results"]);
// };

// // Show result as JSON
// search.json(params, callback);
import React, { useState, useEffect } from "react";

const API_key =
  "ea7b5981c3f18232e0f1c67d7eb3fc98063b28eeea7751ba05564f64a46016ae";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

const getURLByQuery = (query) =>
  `https://serpapi.com/search.html?engine=google&q=${query}&location=Austin%2C+Texas%2C+United+States&google_domain=google.com&gl=us&hl=en&api_key=${API_key}`;

const fetchDataByQuery = async (query) => {
  try {
    const response = await fetch(getURLByQuery(query), requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default function GoogleData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchDataByQuery("Coffee");
      setData(response);
      console.log(response);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Test Google Data</h1>
      <div>{JSON.stringify(data)}</div>
      {/* <div>{data}</div> */}
    </div>
  );
}
