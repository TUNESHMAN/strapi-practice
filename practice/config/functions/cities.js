const axios = require("axios");
const env = process.env.weather_id;

module.exports = async () => {
  const response = await axios.post(
    "https://countriesnow.space/api/v0.1/countries/cities",
    {
      country: "germany",
    }
  );
  const city_name = response.data.data;

  for (let index = 0; index < city_name.length; index++) {
    const element = city_name[index];
    // const weather_response = await axios.post(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${env}`
    // );
    // const weather_details = weather_response.data.main.temp;

    await strapi.query("cities").create({
      name: element,
    });
  }
};
