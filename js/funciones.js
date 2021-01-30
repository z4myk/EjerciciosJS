/*                  EJERCICIO 1
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

for(i= 0; i<= 11; i++){
    document.write(`el mes de: ${meses[i]} <br>`);
}
*/


/*                   EJERCICIO 2
const msg = "Desea poner otra ciudad?";
let ciudades = [];
do{
    
    ciudades.push(prompt("Escriba nombre de ciudades"));
        if(ciudades == "0" || ciudades == " "){   
        document.write("<h2>Se ingreso 0 o vacio");
    
        }else{
    
        console.log (ciudades);
        }
}while(confirm(msg));

document.write('<h4>El array original: </h4>');
document.write(ciudades);
// Longitud del arreglo
document.write('<h4>Longitud del arreglo: </h4>');
document.write(ciudades.length);
// mostrar los items de la primera, tercera y ultima posicion
lastPosition = ciudades.length -1;
document.write(`<h4>Primera posición</h4>${ciudades[0]}`);
document.write(`<h4>Tercera posición</h4>${ciudades[2]}`);
document.write(`<h4>Ultima posición</h4>${ciudades[lastPosition]}`);
// añadir en la ultima posicion Paris
document.write(`<h4>Se añade Paris a la ultima posición</h4>`);
ciudades.push('Paris');
document.write(ciudades);
// mostrar por pantalla el elemento que ocupa la segunda posicion
document.write(`<h4>Segunda posición</h4>${ciudades[1]}`);
// Sustituir el segundo elemento por Barcelona
document.write('<h4>Sustituir el segundo elemento por Barcelona</h4>');
ciudades.splice(1,1,'Barcelona');
document.write(ciudades);
//array final
document.write('<h3>Array final</h3>');
document.write(ciudades);
*/





