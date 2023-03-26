document.addEventListener("DOMContentLoaded", async () => {
  console.log("loaded content");
  const weatherAPIUrl =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&start_date=2023-03-26&end_date=2023-04-01";
  const weatherData = await fetchData(weatherAPIUrl);
  console.log(weatherData);

  const excursionAPIUrl =
    "http://api.opentripmap.com/0.1/ru/places/bbox?lon_min=38.364285&lat_min=59.855685&lon_max=38.372809&lat_max=59.859052&kinds=churches&format=geojson&apikey=5ae2e3f221c38a28845f05b672ba980694a0689ca30f604d05e2496c";

  const excursionData = await fetchData(excursionAPIUrl);
  console.log(excursionData);
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

/// weather carousel stuff
$("#carouselExample").on("slide.bs.carousel", function (e) {
  /*

    CC 2.0 License Iatek LLC 2018
    Attribution required
    
    */

  var $e = $(e.relatedTarget);

  var idx = $e.index();
  console.log("IDX :  " + idx);

  var itemsPerSlide = 8;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item").eq(i).appendTo(".carousel-inner");
      } else {
        $(".carousel-item").eq(0).appendTo(".carousel-inner");
      }
    }
  }
});
