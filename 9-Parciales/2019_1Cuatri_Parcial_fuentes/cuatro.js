function mostrar()
{
    var num1;
    var num2;
    var resta;
    var suma;

    num1 = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(num1)){
        num1 = parseInt(prompt("Dato invalido. Ingrese un numero: "));
        }
    
        num2 = parseInt(prompt("Ingrese un numero: "));
        while(isNaN(num2)){
            num2 = parseInt(prompt("Dato invalido. Ingrese un numero: "));    
    }
    if(num1 == num2){
        alert("Los numeros son: "+ num1 + " " + "y" + " " + num2);
    }
    else if(num1 > num2){
        resta = num1 - num2;
        alert("La diferencia entre los numeros es de: "+ resta);
    }
    if(num1 < num2){
        suma = num1 + num2;
        alert("La suma de los numeros es de: " + suma);
    }
    if(resta > 10 ){
        alert("la resta es:" + " " + resta + " "+  "y superó el 10");
    }
}
