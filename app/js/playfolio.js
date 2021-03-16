//---------------------------------- TEMA 1 (VARIABLES Y CONDICIONALES) ----------------------------------
let skill       = "Programación";
let skill2      = "Diseño";
const persona   = "John Doe";

let mensajeUsuario = "HOLA SOY " + persona.toUpperCase();
alert(mensajeUsuario);

if (skill == "Programación") {
    alert("Soy programador/a");
} else {
    alert("No soy programador/a");
}

if ((skill == "Programación") && (skill2 == "Diseño")) {
    alert("Soy programador/a y diseñador/a");
} else {
    alert("No soy programador/a y diseñador/a");
}
