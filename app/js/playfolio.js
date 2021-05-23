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
//---------------------------------- TEMA 2 (FOR) ----------------------------------
let experiencia=0;

for (let años = 2015; años < 2021; años++) {
    experiencia++;        
}
console.log('Tengo '+experiencia+' años de experiencia en '+skill);

let añoActual=2021;
let añoSabatico=2011;
let capacitacion=true;
for (let añosFormacion = 2009; añosFormacion < añoActual; añosFormacion++) {
    if(añosFormacion==añoSabatico){
        continue
    }else{
        if(capacitacion){
            console.log('El año '+añosFormacion+' me capacité para mejorar en '+skill);
        }  
    }      
}
let duracionCarrera= 4;
for (let años = 0; años < añoActual; años++) {
    if (años==duracionCarrera) {
        console.log('Finalizó la carrera');
        break;
    }else{
        console.log(años+1+'° año de estudio en la carrera.');
    }   
}
//---------------------------------- TEMA 3 (WHILE) ----------------------------------
let experienciaLaboral='junior';
let añosTrabajando=0;
let añoInicioLaboral=2015;
let añoActual=2021;
while (añoInicioLaboral<=añoActual) {
    añosTrabajando++;
    if(añosTrabajando == 3){ 
        experienciaLaboral='Semi Senior';
        //console.log(añosTrabajando);
    }else if (añosTrabajando == 6){
        
        experienciaLaboral='Senior';
    }
    console.log('En el año '+añoInicioLaboral+' alcanzaste el estado de '+experienciaLaboral+' en desarrollo de sistemas.' );
    añoInicioLaboral++;
}




