let edinburghElement = document.querySelector("#edinburgh");
let edinburghDateElement = edinburghElement.querySelector(".date");
let edinburghTimeElement = edinburghElement.querySelector(".time");
edinburghDateElement.innerHTML= moment().format("MMMM Do YYYY");
edinburghTimeElement.innerHTML = "the time will go here";