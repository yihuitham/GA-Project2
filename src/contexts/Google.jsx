const APIKey = "AIzaSyCnuIOZ36z_iQV2o54dz9n1oht7FWXKP48";
const searchEngineID = "1323c5df26a436a65";

const URL = `https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${searchEngineID}&q=lectures`;

const fetchGoogleData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log("data: ", data);
  } catch (err) {
    console.log("error: ", err);
  }
};

fetchGoogleData();
