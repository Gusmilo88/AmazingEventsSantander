const fechaActual = new Date();

let tarjetsElementPastEvents = document.getElementById("container _tarjets_upcomingEvents"); // Capturo el id del div contenedor


const pastEvents = events.filter(evento => {
    const fechaEvento = new Date(evento.date);
    return fechaEvento >= fechaActual;
})

pastEvents.forEach((evento) => {
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
                        <a href="#" id="btnSeeMore" class="btn mt-3">See more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
`;

    tarjetsElementPastEvents.appendChild(tarjeta)

});
