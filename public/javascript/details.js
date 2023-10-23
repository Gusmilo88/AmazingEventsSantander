//Capturo los id:
let contenedorH1 = document.getElementById("contenedorH1")
let contenedorP = document.getElementById("contenedorP")
let contenedorSpan = document.getElementById("contenedorSpan")
let contenedorImg = document.getElementById("contenedorImg")



// Creo elementos:
let nameH1 = document.createElement("h1")
let descriptionP = document.createElement("p")
let priceSpan = document.createElement("span")
let imageImg = document.createElement("img")




//UrlParams:
let urlParams = new URLSearchParams(window.location.search)
//Capturo los params:
let eventName = urlParams.get("eventName")
let eventDescription = urlParams.get("eventDescription")
let eventPrice = urlParams.get("eventPrice")
let eventImage = urlParams.get("eventImage")



//Les paso los parametros de forma dinámica:
nameH1.innerText = eventName
descriptionP.innerText = eventDescription
priceSpan.innerText = "$ " + eventPrice
imageImg.src = eventImage;

//Les agrego las clases que tenian de Tailwind:
nameH1.classList.add("text-gray-900", "text-3xl", "title-font", "font-medium", "mb-1");
descriptionP.classList.add("leading-relaxed");
priceSpan.classList.add("title-font", "font-medium", "text-2xl", "text-gray-900");
imageImg.classList.add("lg:w-1/2", "w-full", "object-cover", "object-center", "rounded", "border", "border-gray-200");




contenedorH1.appendChild(nameH1)
contenedorP.appendChild(descriptionP)
contenedorSpan.appendChild(priceSpan)
contenedorImg.appendChild(imageImg)




{/* <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1> */}

{/* <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p> */}

{/* <span class="title-font font-medium text-2xl text-gray-900">$58.00</span> */}

