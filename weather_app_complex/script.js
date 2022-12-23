
let infoText = document.querySelector(".info-txt");
let inputPart = document.querySelector("input");
let locationButton = document.querySelector("button");
let icons = document.querySelector("img");
let api;
let barbecueIcon = document.querySelector(".barbecue");
let campingIcon = document.querySelector(".camping");
let concertIcon = document.querySelector(".concert");
let cyclingIcon = document.querySelector(".cycling");
let fishingIcon = document.querySelector(".fishing");
let footballIcon = document.querySelector(".football");
let outdoorsIcon = document.querySelector(".outdoors");
let skiingIcon = document.querySelector(".skiing");
let swimmingIcon = document.querySelector(".swimming");
let tennisIcon = document.querySelector(".tennis");
let beachIcon = document.querySelector(".beach");
let joggingIcon = document.querySelector(".jogging");



inputPart.addEventListener("keyup", e => {
    if(e.key == "Enter" && inputPart.value != "") {
        requestApi(inputPart.value)
    }
})

locationButton.addEventListener("click", () => {
    if(inputPart.value == "") {
        infoText.classList.add("error")
    } else {
        requestApi(inputPart.value)
    }
})


function onSucces (succes) {
   const {latitude, longitude} = succes.coords;
   api = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=11da4f1fe8a1ce6303bee9d2c28d3cc9`
   fetchData();
}




function requestApi (city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=11da4f1fe8a1ce6303bee9d2c28d3cc9`;
    fetchData();
}


function fetchData() {
    infoText.innerText = "Getting weather detailes...";
    infoText.classList.add("pending")
    fetch(api).then(response => (response.json()).then(result => weatherFinale(result)));
}



function weatherFinale (info) {
   if (info.cod == 404) {
    infoText.classList.replace("pending", "error");
    infoText.innerText = `${inputPart.value} isn't a valid city`
   } else {

    const city = info.name;
    const country = info.sys.country;
    const temperature = info.main.temp;
    const {description, icon, id} = info.weather[0];

    // Weather Conditional


    if (id == 800 && icon == "01d") {
        icons.setAttribute("src", "./icons/clear_sky_day.png")
    } else if (id == 800 && icon == "01n") {
        icons.setAttribute("src", "./icons/clear_sky_night.png")
    } else if (id >= 200 && id <= 232 && icon == "11d") {
        icons.setAttribute("src", "./icons/thunderstorm_day.png")
    } else if (id >= 200 && id <= 232 && icon == "11n") {
        icons.setAttribute("src", "./icons/thunderstorm_night.png")
    } else if (id >= 300 && id <= 321 && icon == "09d") {
        icons.setAttribute("src", "./icons/shower_rain_day.png")
    } else if (id >= 300 && id <= 321 && icon == "09n") {
        icons.setAttribute("src", "./icons/shower_rain_night.png")
    } else if (id >= 500 && id <= 504 && icon == "10d") {
        icons.setAttribute("src", "./icons/rain_day.png")
    } else if(id >= 500 && id <= 504 && icon == "10n") {
        icons.setAttribute("src", "./icons/rain_night.png")
    } else if (id >= 520 && id <= 531 && icon == "09d") {
        icons.setAttribute("src", "./icons/shower_rain_day.png")
    } else if (id >= 600 && id <= 622 && icon == "13d") {
        icons.setAttribute("src", "./icons/snow.png")
    } else if (id >= 600 && id <= 622 && icon == "13n") {
        icons.setAttribute("src", "./icons/snow.png")
    } else if (id >= 701 && id <= 781 && icon == "50d") {
        icons.setAttribute("src", "./icons/haze.png")
    } else if (id >= 701 && id <= 781 && icon == "50n") {
        icons.setAttribute("src", "./icons/haze.png")
    } else if (id == 801 && icon == "02d") {
        icons.setAttribute("src", "./icons/few_clouds_day.png")
    } else if (id == 801 && icon == "02n") {
        icons.setAttribute("src", "./icons/few_clouds_night.png")
    } else if (id == 802 && icon == "03d") {
        icons.setAttribute("src", "./icons/scattered_clouds_day.png")
    } else if (id == 802 && icon == "03n") {
        icons.setAttribute("src", "./icons/scattered_clouds_night.png")
    } else if (id == 803 && icon == "04d") {
        icons.setAttribute("src", "./icons/broken_clouds.png")
    } else if (id == 803 && icon == "04n") {
        icons.setAttribute("src", "./icons/broken_clouds.png")
    } else if (id == 804 && icon == "04d") {
        icons.setAttribute("src", "./icons/broken_clouds.png")
    } else if (id == 804 && icon == "04n") {
        icons.setAttribute("src", "./icons/broken_clouds.png")
    }


  let degreeNum = document.querySelector(".temp .numb").innerText = Math.floor(temperature);
  document.querySelector(".description").innerText = description.toUpperCase();
  document.querySelector(".location span").innerText = `${city}, ${country}`;
  infoText.innerText = `${inputPart.value} updated`;

 // LifeStyle Conditional


  if (degreeNum >= -10 && degreeNum <= 0 && icon == "01n") { //01n x 1
    barbecueIcon.innerText = "Barbecue 0%";
    barbecueIcon.classList.add("red");
    campingIcon.innerText = "Camping 0%";
    campingIcon.classList.add("red");
    concertIcon.innerText = "Concert 0%";
    concertIcon.classList.add("red");
    cyclingIcon.innerText = "Cycling 0%";
    cyclingIcon.classList.add("red");
    fishingIcon.innerText = "Fishing 0%";
    fishingIcon.classList.add("red");
    footballIcon.innerText = "Football 0%";
    footballIcon.classList.add("red");
    outdoorsIcon.innerText = "Outdoors 25%";
    outdoorsIcon.classList.add("red");
    skiingIcon.innerText = "Skiing 100%";
    skiingIcon.classList.add("green");
    swimmingIcon.innerText = "Swimming 0%";
    swimmingIcon.classList.add("red");
    tennisIcon.innerText = "Tennis 0%";
    tennisIcon.classList.add("red");
    beachIcon.innerText = "Beach 0%";
    beachIcon.classList.add("red");
    joggingIcon.innerText = "Jogging 75%";
    joggingIcon.classList.add("yellow");
    } else if (degreeNum >= 0 && degreeNum <= 10 && icon == "01n") { //01n x 2
    barbecueIcon.innerText = "Barbecue 25%";
    barbecueIcon.classList.add("red");
    campingIcon.innerText = "Camping 25%";
    campingIcon.classList.add("red");
    concertIcon.innerText = "Concert 0%";
    concertIcon.classList.add("red");
    cyclingIcon.innerText = "Cycling 0%";
    cyclingIcon.classList.add("red");
    fishingIcon.innerText = "Fishing 0%";
    fishingIcon.classList.add("red");
    footballIcon.innerText = "Football 0%";
    footballIcon.classList.add("red");
    outdoorsIcon.innerText = "Outdoors 25%";
    outdoorsIcon.classList.add("red");
    skiingIcon.innerText = "Skiing 100%";
    skiingIcon.classList.add("green");
    swimmingIcon.innerText = "Swimming 0%";
    swimmingIcon.classList.add("red");
    tennisIcon.innerText = "Tennis 25%";
    tennisIcon.classList.add("red");
    beachIcon.innerText = "Beach 0%";
    beachIcon.classList.add("red");
    joggingIcon.innerText = "Jogging 25%";
    joggingIcon.classList.add("red");
    } else if(degreeNum >= 10 && degreeNum <= 20 && icon == "01n") { //01n x 3
        barbecueIcon.innerText = "Barbecue 50%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 75%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 50%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 50%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 25%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 25%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 25%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 25%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow"); 
    } else if (degreeNum >= 20 && degreeNum <= 40 && icon == "01n") { //01n x 4
        barbecueIcon.innerText = "Barbecue 75%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 100%";
        campingIcon.classList.add("green");
        concertIcon.innerText = "Concert 100%";
        concertIcon.classList.add("green");
        cyclingIcon.innerText = "Cycling 50%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 75%";
        fishingIcon.classList.add("yellow");
        footballIcon.innerText = "Football 50%";
        footballIcon.classList.add("yellow");
        outdoorsIcon.innerText = "Outdoors 50%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 75%";
        swimmingIcon.classList.add("yellow");
        tennisIcon.innerText = "Tennis 50%";
        tennisIcon.classList.add("yellow");
        beachIcon.innerText = "Beach 25%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow");
    } else if (degreeNum >= -10 && degreeNum <= 0 && icon == "01d") { //01d x 1
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 0%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 25%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 10 && icon == "01d") { //01d x 2
        barbecueIcon.innerText = "Barbecue 25%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 25%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 25%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 50%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 75%";
        skiingIcon.classList.add("yellow");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow");
    } else if(degreeNum >= 10 && degreeNum <= 20 && icon == "01d") { //01d x 3
        barbecueIcon.innerText = "Barbecue 75%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 75%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 75%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 100%";
        cyclingIcon.classList.add("green");
        fishingIcon.innerText = "Fishing 50%";
        fishingIcon.classList.add("yellow");
        footballIcon.innerText = "Football 75%";
        footballIcon.classList.add("yellow");
        outdoorsIcon.innerText = "Outdoors 75%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 25%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 25%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 50%";
        tennisIcon.classList.add("yellow");
        beachIcon.innerText = "Beach 25%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow");
    } else if(degreeNum >= 20 && degreeNum <= 40 && icon == "01d") { //01d x 4
        barbecueIcon.innerText = "Barbecue 100%";
        barbecueIcon.classList.add("green");
        campingIcon.innerText = "Camping 100%";
        campingIcon.classList.add("green");
        concertIcon.innerText = "Concert 75%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 100%";
        cyclingIcon.classList.add("green");
        fishingIcon.innerText = "Fishing 100%";
        fishingIcon.classList.add("green");
        footballIcon.innerText = "Football 100%";
        footballIcon.classList.add("green");
        outdoorsIcon.innerText = "Outdoors 75%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 100%";
        swimmingIcon.classList.add("green");
        tennisIcon.innerText = "Tennis 75%";
        tennisIcon.classList.add("yellow");
        beachIcon.innerText = "Beach 100%";
        beachIcon.classList.add("green");
        joggingIcon.innerText = "Jogging 100%";
        joggingIcon.classList.add("green");
    } else if(degreeNum >= -10 && degreeNum <= 0 && icon == "11d" || icon == "11n") { // 11d, 11n x 1
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 25%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 10 && icon == "11d" || icon == "11n") { // 11d, 11n x 2
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 50%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 10 && degreeNum <= 20 && icon == "11d" || icon == "11n") { // 11d, 11n x 3
        barbecueIcon.innerText = "Barbecue 25%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 75%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 20 && degreeNum <= 40 && icon == "11d" || icon == "11n") { // 11d, 11n x 4
        barbecueIcon.innerText = "Barbecue 50%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 75%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 50%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 50 && icon == "09d" || icon == "09n") { // 09d, 09n x4
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 50%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 50 && icon == "10d" || icon == "10n") { // 10d, 10n x4
        barbecueIcon.innerText = "Barbecue 50%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 75%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 25%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 25%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 25%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 25%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= -20 && degreeNum <= 10 && icon == "13d" || icon == "13n") { // 13d, 13n x4
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 25%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= -20 && degreeNum <= 10 && icon == "50d" || icon == "50n") { //50d, 50n x4
        barbecueIcon.innerText = "Barbecue 25%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 50%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 25%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 25%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 75%";
        skiingIcon.classList.add("yellow");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow");
    } else if(degreeNum >= -10 && degreeNum <= 0 && icon == "02d" || icon == "02n") { // 02d, 02n degree -10 0
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 0%";
        campingIcon.classList.add("25");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 25%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 10 && icon == "02d" || icon == "02n") { // 02d, 02n degree 0 10
        barbecueIcon.innerText = "Barbecue 25%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 50%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 25%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 25%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 50%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 75%";
        skiingIcon.classList.add("yellow");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 25%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow");
    } else if(degreeNum >= 10 && degreeNum <= 20 && icon == "02d" || icon == "02n") { // 02d, 02n degree 10 20
        barbecueIcon.innerText = "Barbecue 75%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 75%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 75%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 75%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 75%";
        fishingIcon.classList.add("yellow");
        footballIcon.innerText = "Football 75%";
        footballIcon.classList.add("yellow");
        outdoorsIcon.innerText = "Outdoors 75%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 25%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 25%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 50%";
        tennisIcon.classList.add("yellow");
        beachIcon.innerText = "Beach 25%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 75%";
        joggingIcon.classList.add("yellow");
    } else if(degreeNum >= 20 && degreeNum <= 40 && icon == "02d" || icon == "02n") { // 02d, 02n degree 20 40
        barbecueIcon.innerText = "Barbecue 100%";
        barbecueIcon.classList.add("green");
        campingIcon.innerText = "Camping 100%";
        campingIcon.classList.add("green");
        concertIcon.innerText = "Concert 100%";
        concertIcon.classList.add("green");
        cyclingIcon.innerText = "Cycling 75%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 75%";
        fishingIcon.classList.add("yellow");
        footballIcon.innerText = "Football 100%";
        footballIcon.classList.add("green");
        outdoorsIcon.innerText = "Outdoors 100%";
        outdoorsIcon.classList.add("green");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 100%";
        swimmingIcon.classList.add("green");
        tennisIcon.innerText = "Tennis 100%";
        tennisIcon.classList.add("green");
        beachIcon.innerText = "Beach 100%";
        beachIcon.classList.add("green");
        joggingIcon.innerText = "Jogging 100%";
        joggingIcon.classList.add("green");
    } else if(degreeNum >= -10 && degreeNum <= 0 && icon == "03d" || icon == "03n") { //03d, 03n degree -10 0
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 0%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 10 && icon == "03d" || icon == "03n") { //03d, 03n degree 0 10
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 25%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 25%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 25%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 10 && degreeNum <= 20 && icon == "03d" || icon == "03n") { //03d, 03n degree 10 20
        barbecueIcon.innerText = "Barbecue 50%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 50%";
        campingIcon.classList.add("yellow");
        concertIcon.innerText = "Concert 50%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 50%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 50%";
        fishingIcon.classList.add("yellow");
        footballIcon.innerText = "Football 50%";
        footballIcon.classList.add("yellow");
        outdoorsIcon.innerText = "Outdoors 50%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 25%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 50%";
        tennisIcon.classList.add("yellow");
        beachIcon.innerText = "Beach 25%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 50%";
        joggingIcon.classList.add("yellow");
    } else if(degreeNum >= 20 && degreeNum <= 40 && icon == "03d" || icon == "03n") { //03d, 03n degree 20 40
        barbecueIcon.innerText = "Barbecue 75%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 100%";
        campingIcon.classList.add("green");
        concertIcon.innerText = "Concert 75%";
        concertIcon.classList.add("yellow");
        cyclingIcon.innerText = "Cycling 75%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 100%";
        fishingIcon.classList.add("green");
        footballIcon.innerText = "Football 100%";
        footballIcon.classList.add("green");
        outdoorsIcon.innerText = "Outdoors 100%";
        outdoorsIcon.classList.add("green");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 75%";
        swimmingIcon.classList.add("yellow");
        tennisIcon.innerText = "Tennis 75%";
        tennisIcon.classList.add("yellow");
        beachIcon.innerText = "Beach 75%";
        beachIcon.classList.add("yellow");
        joggingIcon.innerText = "Jogging 100%";
        joggingIcon.classList.add("green");
    } else if(degreeNum >= -10 && degreeNum <= 0 && icon == "04d" || icon == "04n") { //04d, 04n degree -10 0
        barbecueIcon.innerText = "Barbecue 0%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 0%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 0%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 0%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 0%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 0%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 0%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 0%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 0 && degreeNum <= 10 && icon == "04d" || icon == "04n") { //04d, 04n degree 0 10
        barbecueIcon.innerText = "Barbecue 25%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 25%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 25%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 25%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 25%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 25%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 10 && degreeNum <= 20 && icon == "04d" || icon == "04n") { //04d, 04n degree 10 20
        barbecueIcon.innerText = "Barbecue 25%";
        barbecueIcon.classList.add("red");
        campingIcon.innerText = "Camping 25%";
        campingIcon.classList.add("red");
        concertIcon.innerText = "Concert 25%";
        concertIcon.classList.add("red");
        cyclingIcon.innerText = "Cycling 25%";
        cyclingIcon.classList.add("red");
        fishingIcon.innerText = "Fishing 25%";
        fishingIcon.classList.add("red");
        footballIcon.innerText = "Football 25%";
        footballIcon.classList.add("red");
        outdoorsIcon.innerText = "Outdoors 25%";
        outdoorsIcon.classList.add("red");
        skiingIcon.innerText = "Skiing 100%";
        skiingIcon.classList.add("green");
        swimmingIcon.innerText = "Swimming 0%";
        swimmingIcon.classList.add("red");
        tennisIcon.innerText = "Tennis 0%";
        tennisIcon.classList.add("red");
        beachIcon.innerText = "Beach 0%";
        beachIcon.classList.add("red");
        joggingIcon.innerText = "Jogging 25%";
        joggingIcon.classList.add("red");
    } else if(degreeNum >= 20 && degreeNum <= 40 && icon == "04d" || icon == "04n") { //04d, 04n degree 20 40
        barbecueIcon.innerText = "Barbecue 75%";
        barbecueIcon.classList.add("yellow");
        campingIcon.innerText = "Camping 100%";
        campingIcon.classList.add("green");
        concertIcon.innerText = "Concert 100%";
        concertIcon.classList.add("green");
        cyclingIcon.innerText = "Cycling 50%";
        cyclingIcon.classList.add("yellow");
        fishingIcon.innerText = "Fishing 75%";
        fishingIcon.classList.add("yellow");
        footballIcon.innerText = "Football 100%";
        footballIcon.classList.add("green");
        outdoorsIcon.innerText = "Outdoors 75%";
        outdoorsIcon.classList.add("yellow");
        skiingIcon.innerText = "Skiing 0%";
        skiingIcon.classList.add("red");
        swimmingIcon.innerText = "Swimming 75%";
        swimmingIcon.classList.add("yellow");
        tennisIcon.innerText = "Tennis 100%";
        tennisIcon.classList.add("green");
        beachIcon.innerText = "Beach 100%";
        beachIcon.classList.add("green");
        joggingIcon.innerText = "Jogging 75%";
        joggingIcon.classList.add("yellow");
    }

}
}





