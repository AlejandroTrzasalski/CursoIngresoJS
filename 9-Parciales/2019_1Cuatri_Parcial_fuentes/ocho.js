function mostrar()
{

    var numero;
    var letra;
    var AcumPositivos = 0;
    var contadorPos = 0;
    var AcumCeros = 0;
    var AcumNegativos = 0;
    flag = 0;    
    var CantPares = 0;
    var CantImpares = 0;
    var PromPositivos;
    var seguir;
    var NumMax;
    var NumMin;
    var LetraMax;
    var LetraMin;

    do{
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while(isNaN(numero) || numero < -100 || numero >100 ){
            numero = parseInt(prompt("Dato Invalido. Ingrese un numero entre -100 y 100: "));
        }
        letra = prompt("Ingrese una letra: ");
        while(!(letra >= "A" || letra <= "Z" && letra >= "a" || letra <= "z")){
            letra = prompt("Dato Invalido. Ingrese una letra: ");
        }

        if (numero % 2 == 0){
            CantPares++;
        }
        else{
            CantImpares++;
        }



        if(numero >0){
            AcumPositivos = AcumPositivos + numero;
            contadorPos++;
        }
        else if(numero <0 ){
            AcumNegativos= AcumNegativos + numero;
            
        }
        else{
            AcumCeros++;
        }
        



        
        if(flag ==0 || numero > NumMax){
            NumMax = numero;
            LetraMax = letra;
        }
        if(flag ==0 || numero < NumMin){
            NumMin = numero;
            LetraMin = letra;
            flag = 1;
        }
       seguir = prompt("Para continuar presione la tecla -s- para finalizar la tecla -n-");
      } while(seguir == "s");
    
    
    if(contadorPos !=0){
        PromPositivos = AcumPositivos / contadorPos;
    }

    document.write("a) Cantidad de numeros pares: " + CantPares + "</br>");
    document.write("b) Cantidad de numeros impares: " + CantImpares + "</br>");
    document.write("c) Cantidad de ceros: " + AcumCeros + "</br>");
    document.write("d) Promedio de todos los numeros positivos ingresados: " + PromPositivos.toFixed(2) + "</br>");
    document.write("e) La suma de todos los numeros negativos: " + AcumNegativos + "</br>");
    document.write("f) Numero Maximo: " + NumMax + " Letra: " + LetraMax + "</br>");
    document.write("f) Numero Minimo: " + NumMin + " Letra: " + LetraMin + "</br>");
}
