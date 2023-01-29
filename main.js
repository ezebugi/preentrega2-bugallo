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
  else if (edad > 90){
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

} for(let turno = 1; turno <= 1; turno++){
   let fecha = prompt("Ingrese una fecha para disponibilidad, utilizando DD/MM/XXXX");
   let mensaje = `Turno libre :${turno} fecha asignada: ${fecha}`;
   alert(mensaje);
 }

 

