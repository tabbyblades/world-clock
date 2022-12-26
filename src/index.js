
function updateTime(){

let edinburghElement = document.querySelector("#edinburgh");
let edinburghDateElement = edinburghElement.querySelector(".date");
let edinburghTimeElement = edinburghElement.querySelector(".time");
let edinburghTime = moment().tz("GB");
edinburghDateElement.innerHTML= moment().format("MMMM Do YYYY");
edinburghTimeElement.innerHTML = edinburghTime.format("h:mm:ss [<small>]A[</small>]");

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
let newyorkTime = moment().tz("US/Eastern");
newyorkDateElement.innerHTML= moment().format("MMMM Do YYYY");
newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss [<small>]A[</small>]");}

updateTime()
setInterval(updateTime, 1000);