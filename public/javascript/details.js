//Elementos capturados:
let contenedorElementDetail = document.getElementById("elementDetail");

 
let nameH1 = document.createElement("h1")
let descriptionP = document.createElement("p")
let priceSpan = document.createElement("span")
let imageImg = document.createElement("img")

let urlParams = new URLSearchParams(window.location.search)

let eventName = urlParams.get("name")
let eventDescription = urlParams.get("description")
let eventPrice = urlParams.get("price")
let eventImage = urlParams.get("image")

nameH1.innerHTML = "Nombre: "