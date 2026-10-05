class Alumno{
    constructor(id, nombre, dni) {
        this.id = id
        this.nombre = nombre;
        this.dni = dni;
    }
}

const alumnos = []
alumnos.push(new Alumno(1, "Manuel", "12345678Z"))
alumnos.push(new Alumno(2, "Alvaro", "12345678Z"))
alumnos.push(new Alumno(3, "Jose", "12345678Z"))
alumnos.push(new Alumno(4, "Alba", "12345678Z"))
alumnos.push(new Alumno(5, "Carmen", "12345678Z"))
alumnos.push(new Alumno(6, "Paco", "12345678Z"))
alumnos.push(new Alumno(7, "Marcos", "12345678Z"))
alumnos.push(new Alumno(8, "Ivan", "12345678Z"))
alumnos.push(new Alumno(9, "Daniel", "12345678Z"))
alumnos.push(new Alumno(10, "Alvaro2", "12345678Z"))


const alumnosGenerados = []

let button = document.querySelector("#generate")

button.addEventListener("click", () => {

    if (alumnos.length === 0) {
        alert("ARRAY VACIO")
        return undefined
    }
    
    let index = obtenerNumeroAleatorio(alumnos.length-1)
    console.log("Indice aleatorio:", index)
    console.log("Alumno aleatorio:", alumnos[index])
    crearCard(alumnos[index])
    pasarDeListaALista(alumnos, alumnosGenerados, index)

    console.log("------------------------------")
    console.log(alumnos)
    console.log(alumnosGenerados)
    console.log("------------------------------")
})

function obtenerNumeroAleatorio(n) {
  return Math.floor(Math.random() * (n+1));
}

function crearCard(alumno) {
    const card = document.createElement("DIV");
    card.className = "card"
    card.style.border = '2px solid black'
    card.style.width = '20%'
    card.id = alumno.id

    const nombre = document.createElement("H2");
    nombre.textContent = alumno.nombre

    const dni = document.createElement("H3");
    dni.textContent = alumno.dni

    const button = document.createElement("BUTTON");
    button.textContent = "Borrar"

    button.addEventListener("click", (e) => borrarCard(e))

    card.appendChild(nombre)
    card.appendChild(dni)
    card.appendChild(button)

    cardContainer.appendChild(card)

}

function borrarCard(evento) {
    let index = alumnosGenerados.findIndex((a) => JSON.stringify(a.id) === evento.target.parentElement.id)
    pasarDeListaALista(alumnosGenerados, alumnos, index)
    evento.target.parentElement.remove()

    console.log("------------------------------")
    console.log(alumnos)
    console.log(alumnosGenerados)
    console.log("------------------------------")
}

function pasarDeListaALista(listaOrigen, listaDestino, indice) {
    listaDestino.push(listaOrigen[indice])
    listaOrigen.splice(indice, 1)
}