function mostrar()
{

    var numero; 
    var contadorDivisores = 0;

    numero = parseInt(prompt("Ingrese un numero"));
    while(isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
        }
        for(var i = 1 ; i <= numero ; i++ ){

            if (numero % i == 0) {
                console.log(i);
                contadorDivisores++;
            } 
            }
         console.log("La cantidad de divisores encontrados es:  " + contadorDivisores);



} //FIN DE LA FUNCIÓN