//Elementos capturados:
let contenedorElement = document.getElementById("container_tarjets_home"); //Contenedor donde voy a crear las tarjetas
let btnElement = document.getElementById("button-addon1"); //Botón de la barra de busqueda
let inputSearchElement = document.getElementById("inputSearch"); //Input de la barra de busqueda


function dibujarTarjetas(array) {

  if(array){

    contenedorElement.innerHTML = "";


  array.forEach((evento) => {
    let tarjeta = document.createElement("div");

  tarjeta.innerHTML = `<div class="events_area">
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-lg-5">
              <div class="main_title">
              </div>
          </div>
      </div>
      <div class="row">
              <div class="single_event position-relative">
                  <div class="event_thumb">
                      <img class="event-image" src="${evento.image}" alt="" />
                  </div>
                  <div class="event_details">
                      <div class="d-flex mb-4">
                          <div class="date"><span>${evento.date}</span></div>
                          <div class="time-location">
                              <p><span class="ti-time mr-2"></span> 12:00 AM - 12:30 AM</p>
                              <p><span class="ti-location-pin mr-2"></span>${evento.place}</p>
                          </div>
                      </div>
                      <p>
                      ${evento.description}
                      </p>
                      <a href="#" id="btnSeeMore" class="btn mt-3">See more</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`;

  contenedorElement.appendChild(tarjeta);
  })
} else {
  console.log("Se necesita un array para dibjar los eventos");
}
  
}

dibujarTarjetas(events);



//Lógica de la barra de busqueda por texto:

btnElement.addEventListener("click", () => {

  let nombreEvento = inputSearchElement.value
  
  let arrayDeEventosFiltrados = events.filter((evento) => evento.name.toLowerCase().includes(nombreEvento.toLowerCase()));

  if(arrayDeEventosFiltrados.length == 0) {
    dibujarTarjetas(events)
  } else {
    dibujarTarjetas(arrayDeEventosFiltrados)
  }

});



//Lógica de los checkbox:

// document.getElementByTagName('input[type=checkbox]')

//tagname
