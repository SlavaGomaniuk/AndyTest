/** @format */
let Mykey = "10222713af14117672d4d02b4f8096a2";
function cityInput(event) {
  event.preventDefault();
  let input = document.querySelector("#cities");
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  console.log(h1);

  let MyUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${Mykey}&units=metric`;
  axios.get(MyUrl).then(showTemperature);
}

let buttonInput = document.querySelector("button");
buttonInput.addEventListener("click", cityInput);

function showTemperature(response) {
  let temperatura = Math.round(response.data.main.temp);
  let city = response.data.name;
  console.log(response);
  let temp = document.querySelector("#tempo");
  temp.innerHTML = temperatura;
  let clouds = response.data.weather[0].main;
  console.log(clouds);
  let cloud = document.querySelector("#clod");
  cloud.innerHTML = clouds;
}
let now = new Date();
function formatDate() {
  let data = now.getDate();
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ];
  let Month = Months[now.getMonth()];
  let Data = `Today is ${day}, ${Month} ${data}, ${year}`;
  return Data;
}
console.log(formatDate());
let datainput = document.querySelector("#datanow");
datainput.innerHTML = formatDate();
