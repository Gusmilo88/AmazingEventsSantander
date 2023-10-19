//Elementos capturados:
let contenedorElement = document.getElementById("container_tarjets_upcomingEvents"); //Contenedor donde voy a crear las tarjetas

let btnElement = document.getElementById("button-addon1"); //Botón de la barra de busqueda
let inputSearchElement = document.getElementById("inputSearch"); //Input de la barra de busqueda

let eventos = [];

let fechaActual = new Date();

//Function que dibuja las tarjetitas:
function dibujarTarjetas(array) {
  if (array) {
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
                        <h2 id="eventCardName" class="mb-2">${evento.name}</h2>
                        <p>
                        ${evento.description}
                        </p>
                        <a href="../../src/details.html?eventName=${evento.name}&eventImage=${evento.image}&eventDescription=${evento.description}&eventPrice=${evento.price}" id="btnSeeMore" class="btn mt-3">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>`;

      contenedorElement.appendChild(tarjeta);
    });
  } else {
    console.log("Se necesita un array para dibujar los eventos");
  }
}

//Llamamos a la API:
async function ejecutarDibujado() {
  await axios
    .get("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => {
      console.log(response);
      eventos = response.data.events;
    })
    .catch((error) => {
      console.log("Error " + error.message);
    });

  //Filtramos por eventos pasados:
  const upcomingEvents = eventos.filter((evento) => {
    const fechaEvento = new Date(evento.date);
    return fechaEvento > fechaActual;
  });

  upcomingEvents.forEach((evento) => {
    dibujarTarjetas(upcomingEvents);
  });
}

ejecutarDibujado();

//Lógica de la barra de busqueda por texto:

btnElement.addEventListener("click", () => {
  let nombreEvento = inputSearchElement.value;

  let arrayDeEventosFiltrados = eventos.filter((evento) =>
    evento.name.toLowerCase().includes(nombreEvento.toLowerCase())
  );

  if (arrayDeEventosFiltrados.length == 0) {
    dibujarTarjetas(eventos);
  } else {
    dibujarTarjetas(arrayDeEventosFiltrados);
  }
});
