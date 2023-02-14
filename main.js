let nombre = prompt("ingrese su nombre");

if (nombre === "") {
  alert("no ingresaste tu nombre");
}
else {
  alert("bienvenido/a " + nombre);
  let edad = parseInt(prompt("ingrese su edad"));

  if (edad < 18) {
    alert("no podes entrar a la pagina");
  }
  else if (edad > 90) {
    alert("no podes entrar a la pagina");
  }

  else {
    alert("podes ingresar a la pagina");
  }
}
let respuesta = prompt("Sos una empresa o una persona?");
if (respuesta.toUpperCase() === "EMPRESA") {
  alert("Estas en el lugar correcto");
}
else if (respuesta.toUpperCase() === "PERSONA") {
  alert("Esta pagina es para empresas, si queres reservar un turno, tendrias que reservarlo con el lugar o persona indicada");
}

else {
  alert("No ingresaste si sos empresa o persona");

} for (let turno = 1; turno <= 1; turno++) {
  let fecha = prompt("Ingrese una fecha para disponibilidad, utilizando DD/MM/XXXX");
  let mensaje = `Turno libre :${turno} fecha asignada: ${fecha}`;
  alert(mensaje);
}

//
alert("calcule el valor de su turno");
function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "sumar":
      return numero1 + numero2;
      break;

    case "restar":
      return numero1 - numero2;
      break;

    case "multiplicar":
      return numero1 * numero2;
      break;

    case "dividir":
      return numero1 / numero2;
      break;

    default:
      return "no hay resultado";
      break;
  }
}

let numeroUno = parseInt(prompt("ingrese el primer numero"));
let numeroDos = parseInt(prompt("ingrese el segundo numero"));
let operacion = prompt("ingrese el tipo de calculo que quiere realizar");

let resultado = calculadora(numeroUno, numeroDos, operacion);
let mensaje = `El resultado del calculo es: ${resultado}`;
alert(mensaje);
//

function despedir() {
  respuesta = prompt("que tengas un agradeble dia");
  if (respuesta == "gracias") {
    alert(":)");
  }
  else {
    alert("entonces no lo tengas...");
  }
}
despedir()

//funcion para sumar valores

function calculo() {
  console.log("calcular");
  return
  console.log("no calcular");
}
calculo();

function sumar(numero1, numero2) {
  resultado = numero1 + numero2;
}
sumar(11, 7);
console.log(resultado);

// estructura de objeto


const empresa = {
  nombre: "web turnos",
  fundacion: 2022,
  direccion: "venezuela 2592"
};

console.log(empresa.nombre);
console.log(empresa.fundacion);
console.log(empresa.direccion);

// arreglos

const nombres = ["turno 1", "turno 2", "turno 3"];
console.log(nombres[1]);
console.log(nombres[0]);
console.log(nombres[2]);
const arregloNumeros = [1, 3, 7, 10];
let resultadoSuma = arregloNumeros[3] + arregloNumeros[1];
console.log(resultadoSuma);







