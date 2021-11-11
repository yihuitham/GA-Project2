import React, { useState, useEffect } from "react";

//change to your api key
const access_token = "563492ad6f9170000100000196acc2f0182e4dae9ef0b6bdb2d7a6d1";

const getURLByQuery = (query) =>
  `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

const options = {
  method: "GET",
  headers: {
    Authorization: access_token,
  },
};

const fetchDataByQuery = async (query) => {
  try {
    const response = await fetch(getURLByQuery(query), options);
    const data = await response.json();
    const img = data.photos[0].src.tiny;
    return img;
    // const test = "test";
    // return test;
  } catch (err) {
    console.log(err);
  }
};

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchDataByQuery("Singapore");
      setData(response);
      console.log(response);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Test Fetching Data</h1>
      {/* <div>{JSON.stringify(data)}</div> */}
      <div>{data}</div>
    </div>
  );
};

export { FetchData, fetchDataByQuery };
