function mostrar()

{

    var numero;
    var letra;
    var seguir;
    var ContadorDePares = 0;
    var ContadorDeImpares = 0;
    var ContadorDeCeros = 0;
    var AcumPositivos = 0;
    var AcumNegativos = 0;
    var ContadorPositivos = 0;
    var PromPositivos;
    var Flag = 0;
    var NumMin;
    var NumMax;
    var LetraMin;
    var LetraMax;
    
    
        
    do{
        
            letra = prompt("Ingrese una letra: ");
            while( !((letra >="A" && letra <="Z" || letra >= "a" && letra <= "z"))){
                letra = prompt("Eso NO es una letra. Ingrese una letra: ");
            }
    
            numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
            while(isNaN(numero) || numero < -100 || numero > 100 ){
                numero = parseInt(prompt("Numero invalido. Ingrese un numero entre -100 y 100: "));
            }
    
            if(numero > 0){
                AcumPositivos = AcumPositivos + numero;
                ContadorPositivos++;
            }
    
            else if(numero < 0){
                AcumNegativos = AcumNegativos + numero;
                
            }
    
            else{
                ContadorDeCeros++;
            }
    
            if(numero % 2 == 0){
                ContadorDePares++;
            }
            else if(numero % 2 == 1){
                ContadorDeImpares++;
            }
            
            
            if(AcumNegativos != 0){
                AcumNegativos = AcumNegativos + numero;
            }
            if(Flag == 0 || numero < NumMin){
                NumMin = numero;
                LetraMin = letra;
                
            }
            if(Flag == 0 || numero > NumMax){
                NumMax  = numero;
                LetraMax = letra;
                Flag = 1;
            }

            seguir = prompt("Quiere continuar?");
            } while (seguir == 's');
            
            if(ContadorPositivos != 0){
                PromPositivos = AcumPositivos / ContadorPositivos;
            }
    
            document.write("1 - La cantidad de numeros pares es: " + ContadorDePares + "</br>");
            document.write("2 - La cantidad de numeros impares es: " + ContadorDeImpares + "</br>");
            document.write("3 - La cantidad de ceros es: " + ContadorDeCeros + "</br>");
            document.write("4 - El Promedio de numeros positivos es: " + PromPositivos + "</br>");
            document.write("5 - La suma de los numeros negativos es: " + AcumNegativos + "</br>");
            document.write("6 - El numero y la letra Maximos son: " + NumMax + " " + LetraMax + " " + "</br>");
            document.write("7 - El numero y la letra Minimos son: " + NumMin + " " + LetraMin + " " + "</br>");
    
    }
    
    
    
    
    
    
       
    

