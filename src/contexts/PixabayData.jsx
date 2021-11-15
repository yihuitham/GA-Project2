import React, { useState, useEffect } from "react";

const API_key = "24334696-7a0630b0fbfbc8f637afe0d64";

var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "__cf_bm=vqhQGsur8IFnsLpimOeChbgmZSfjxkHZG4cjh72qWl8-1636898862-0-Afgh5X3HCeEPWTl4aR5vg42NqvDPv/r8V80Y1YlwnbB+ACoQ1H2Z/27s/F3FQHlSQUtxOlybUGBdjmlxw9wmq1k=; anonymous_user_id=None"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const getURLByQuery = (query) =>
  `https://pixabay.com/api/?key=${API_key}&q=${query}+travel&image_type=photo`;

const fetchPixabayByQuery = async (query) => {
  try {
    const response = await fetch(getURLByQuery(query), requestOptions);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.hits.length);
    return data.hits[randomIndex].largeImageURL;
  } catch (err) {
    console.log(err);
  }
};
function PixabayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchPixabayByQuery("Afghanistan");
      setData(response);
      console.log(response);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Test Pixabay Data</h1>
      <div>{JSON.stringify(data)}</div>
      <img src={data} />
    </div>
  );
}

export { fetchPixabayByQuery, PixabayData };
