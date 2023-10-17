let tarjetsElement = document.getElementById("container_tarjets_home"); //Capturo el id del contenedor donde voy a crear las tarjetas

let inputSearchElement = document.getElementById("inputSearch")



function dibujarTarjeta(evento) {
  
  let tarjeta = document.createElement("div");
    
  tarjeta.innerHTML = `<div><div class="card mb-3 mx-auto" style="max-width: 540px;">
  <div class="row g-0 border border-5 border-warning">
    <div class="col-md-4">
      <img src="${evento.image}" class="img-fluid rounded-start" alt="${evento.place}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title fw-bold">${evento.name}</h3>
        <p class="card-text">${evento.description}</p>
        <p class="card-text"><strong>Date: </strong>${evento.date}</p>
        <p class="card-text text-success"><strong>Price: </strong> $${evento.price}</p>
      </div>
    </div>
    <div class="mb-12 pb-1 pt-1 text-center">
                        <a src="../../src/details.html${evento._id}"><button
                          id="btn-enviar"
                          class="mb-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          >
                          See more...
                        </button></a>
                      </div>
  </div>
</div></div>
`;

  tarjetsElement.appendChild(tarjeta)

}

events.forEach((evento) => {
  dibujarTarjeta(evento)
});


//Lógica de la barra de busqueda por texto: 

inputSearchElement.addEventListener("change", () => {
  console.log(inputSearchElement.value);
})


//Lógica de los checkbox:

// document.getElementByTagName('input[type=checkbox]')


//tagname

