//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//69cbdbf4ebd6326a22827ba43671276a
const weatherApi={
key:"69cbdbf4ebd6326a22827ba43671276a"
baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox=document.getElementById("input-box");
searchInputBox.addEventListener('keypress',(event)=>{
if (event.keycode==13){               ){
console.log(searchInputBox.value);
getWetherReport(searchInputBox.value);
document.querySelector('.weather-body').style.display = "block";
}
});
function getWeatherReport(city){
fetch(${weatherApi.baseUrl}?q=${city}&appid=$(weatherApi.key}&units=metric')
.then(weather=>{
return weather.json();
})
.then(showWeatherReport);
}
function showWeatherReport(weather){
console.log(weather);
let city = document.getElementById('city');
city.innerText='${weather.name},${weather.sys.country}';

let temperature = document.getElementById('temp');
temperature.innerHTML ='${Math.round(weather.main.temp)}&deg;c';

let minMaxTemp = document.getElementById('min-max');
minMaxTemp.innerHTML = '${Math.floor(weather.main.temp_min)}&deg;c(min)/
${Math.ceil(weather.main.temp_max)}&deg;c(max)';

let date = document.getElementById('date');
let todayDate = new Date();
date.innerText = dateManage(todayDate);

if(weatherType.textcontent== 'clear'){
document.body.style.backgroundImage = "url(.................)"

else if(weatherType.textcontent== 'cloud'){
document.body.style.backgroundImage = "url(.................)"

else if(weatherType.textcontent== 'Rain'){
document.body.style.backgroundImage = "url(.................)"

else if(weatherType.textcontent== 'Snow'){
document.body.style.backgroundImage = "url(.................)"

elseif(weatherType.textcontent== 'clear'){
document.body.style.backgroundImage = "url(.................)"

else if(weatherType.textcontent== 'clear'){
document.body.style.backgroundImage = "url(.................)"

function dateManage(dateArg){
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuurday"];

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let year = dateArg.getFullYear();
let month = months[dateArg.getMonth()];
let date = dateArg.getDate();
let day = days[dateArg.getDay()];

return '${date} ${month} (${day}), ${year}';
}