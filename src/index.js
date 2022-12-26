
function updateTime(){

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML= moment().format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

let seoulElement = document.querySelector("#seoul");
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
let seoulTime = moment().tz("Asia/Seoul");
seoulDateElement.innerHTML= moment().format("MMMM Do YYYY");
seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML= moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

let newyorkElement = document.querySelector("#newyork");
let newyorkDateElement = newyorkElement.querySelector(".date");
let newyorkTimeElement = newyorkElement.querySelector(".time");
let newyorkTime = moment().tz("America/New_York");
newyorkDateElement.innerHTML= moment().format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]A[</small>]");}

updateTime()
setInterval(updateTime, 1000);

function updateCity(event){
    let cityTimezone = event.target.value;
    let cityTime = moment().tz(cityTimezone);
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML= 
    `<div class="row m-3 city">
    <div class="col-md-6"><h2>${cityName}</h2>
    <h5 class="date">${cityTime.format("MMMM Do YYYY")}</h5></div>
    <div class="col-md-6 time"><h3>${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small>
</h3></div>
</div>`;
}

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity);