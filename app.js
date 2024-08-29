require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const ACCESS_KEY = "b4d3ff61b86973892de911d8e4d7f343";
const URL = "http://api.weatherstack.com/current?";

async function getWeather(city) {
  try {
    const response = await axios.get(URL, {
      params: {
        access_key: ACCESS_KEY,
        query: city,
        units: "m",
      },
    });
    const data = response.data;
    console.log(data);
    console.log(`Weather in ${data.location.name}`);
    console.log(`Temperature in ${data.current.temperature}`);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
  }
}

getWeather("Tirupati");
