// Add current date to the h2
let now = new Date();
        let h2 = document.querySelector("h2");
        let hour = now.getHours();
        let minutes = now.getMinutes();       
        let days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"];
        let day = days[now.getDay()];
        h2.innerHTML = `${day} ${hour}:${minutes}`;
// Add City name to the h1

function displayCityTemp(response){
  console.log(response.data.name);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
}
function changeCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-name");
 console.log(cityInput.value);
  //let h1 = document.querySelector("h1");
  if(cityInput.value){
     let apiKey = "51c49dd4a7572143a46e719b64939b59";
    let cityName = cityInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayCityTemp);} 
  else{
  alert(`Type a city name`);
 }
}
function showCurrent(response){
console.log(response.data.name);
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
}
function currentPosition(position){
let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "51c49dd4a7572143a46e719b64939b59";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showCurrent);
}
function getCurrentLocation (event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentPosition);
}

let searchCityButton = document.querySelector("#search-button");
searchCityButton.addEventListener("click", changeCity);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getcurrentLocation);

// Temperature unit selection Celsius or Farenheit
//function convertCelsius(event){
  //event.preventDefault();
  //let newTemp = document.querySelector("#temperature");
  //newTemp.innerHTML = Math.round(response.data.main.temp);
//}

//function convertFahrenheit(event){
//event.preventDefault();
//let newTemp = document.querySelector("#temperature");
//newTemp.innerHTML = `77`;
//}
//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertCelsius);
//let FahrenheitLink = document.querySelector("#fahrenheit-link");
//FahrenheitLink.addEventListener("click", convertFahrenheit);
  

  