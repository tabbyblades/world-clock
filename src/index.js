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