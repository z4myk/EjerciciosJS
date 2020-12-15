

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