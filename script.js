document.addEventListener("DOMContentLoaded", async () => {
  console.log("loaded content");
  const weatherAPIUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&start_date=2023-03-26&end_date=2023-04-01";

  const data = await fetchData(weatherAPIUrl);
  console.log(data);
});

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  console.log("updated content");
  const excursionAPIUrl = " http://api.opentripmap.com/0.1/ru/places/bbox?lon_min=38.364285&lat_min=59.855685&lon_max=38.372809&lat_max=59.859052&kinds=churches&format=geojson&apikey=xxxxx"

  const data = await fetchData(excursionAPIUrl);
    console.log(data);
  });

  const fetchData1 = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };