let cardContainer = document.querySelector("#cardContainer");

cardContainer.removeChild(cardContainer.firstElementChild);

let cardABorrar = document.querySelector(".cards.redClass");

console.log(cardABorrar);

cardABorrar.remove();

let nombre = document.createElement("H1");
nombre.textContent = "Joaquin";

console.log(nombre);

let enlace = document.createElement("A");
enlace.textContent = "Vedruna"
enlace.href = "https://vedrunasevilla.org/"

console.log(enlace);

let botonJoker = document.createElement("BUTTON");
botonJoker.id = "botonJoker";
botonJoker.textContent = "Boton";

console.log(botonJoker);

let card = document.createElement("DIV");
card.className = "cards greenClass";

console.log(card);

card.appendChild(nombre);
card.appendChild(enlace);
card.appendChild(botonJoker);

cardContainer.appendChild(card);