

/*                EJERCICIO 1

let num1 = prompt("Ingrese su edad");

if(num1 >= 18){
    alert("usted puede conducir")
} else {
    alert("No puede conducir")
} */




/*                        EJERCICIO 2 
let usuarioResultado = 0;
let bucle = "true";
do{

    usuarioResultado = prompt('Ingrese su nota porfavor, o escriba cancelar para salir.');

    if(usuarioResultado >= 0 && usuarioResultado <= 2){
        alert('Su nota es muy deficiente.');
    } else if(usuarioResultado >= 3 && usuarioResultado <= 4 ){
        alert('Su nota es insuficiente');
    } else if (usuarioResultado >= 5 && usuarioResultado <= 6){
        alert('Su nota es suficiente.');
    } else if(usuarioResultado == 7){
        alert('Su nota es bien.');
    } else if(usuarioResultado >= 8 && usuarioResultado <= 9 ){
        alert('Su nota es notable.');
    } else if (usuarioResultado == 10){
        alert('Su nota es sobresaliente.');
    }else if (usuarioResultado == "cancelar"){
        bucle = false;
    }else{
        alert('Numero erroneo, introduce un numero valido.');
    }
    
}while (bucle)
*/



/*            EJERCICIO 3
let respuesta = ''; 

do {
    let cadena = prompt('Escribe una palabra');
    if(respuesta == ""){
        respuesta = respuesta + cadena;
     }else{
         respuesta = respuesta + "-" + cadena;
     }
}while(confirm("usted quiere seguir?"))

alert(respuesta);
*/


/*                EJERCICIO NUMERO 4
let suma = 0;

do{

    let numero = prompt('Ingrese un numero')

    if (Number (numero)){
        suma = suma + (Number(numero));
    }else {
        (isNaN(numero))
        alert('no es un numero'); 
    }

}while(confirm('Para añadir otro numero ponga aceptar, si no cancelar.'));

document.write('El resultado de la suma es: ' + suma);
*/ 



/*                 EJERCICIO NUMERO 5
let resto = 0;
let letras = "";

do{
    let numero = prompt('Introduzca su DNI');

    if(Number(numero) == numero) {
        numero = Number(numero);
        if(numero >= 0 && numero <= 99999999){
        resto = numero % 23;

            switch(resto){
                case 0:
                    letras = "T";
                    break;
                case 1:
                    letras = "R";
                    break;
                case 2:
                    letras = "W";
                    break;
                case 3:
                    letras = "A";
                    break;
                case 4:
                    letras = "G";
                    break;
                case 5:
                    letras = "M";
                    break;
                case 6:
                    letras = "Y";
                    break;
                case 7:
                    letras = "F";
                    break;
                case 8:
                    letras = "P";
                    break;
                case 9:
                    letras = "D";
                    break;
                case 10:
                    letras = "X";
                    break;
                case 11:
                    letras = "B";
                    break;
                case 12:
                    letras = "N";
                    break;
                case 13:
                    letras = "J";
                    break;
                case 14:
                    letras = "Z";
                    break;
                case 15:
                    letras = "S";
                    break;
                case 16:
                    letras = "Q";
                    break;
                case 17:
                    letras = "V";
                    break;
                case 18:
                    letras = "H";
                    break;
                case 19:
                    letras = "L";
                    break;
                case 20:
                    letras = "C";
                    break;
                case 21:
                    letras = "K";
                    break;
                case 22:
                    letras = "E";
                    break;
                default:
                alert("Numero erroneo");   
            }  
            
        }
        alert("Numero: " + numero + ", Letra: " + letras);
    }else if(numero != undefined){
        alert(numero + " No es un numero")
        }
}while(confirm('¿Quiere colocar otro DNI?'));
*/
