function mostrar()
{
    var altura;
    var sexo;
    var contadorDeAlturas = 0;
    var PromedioDeAlturas;
    var AlturaBaja;
    var SexoBajo;
    var flag =0;
    var Mujeres190 = 0;

    for(var i = 0; i<5;i++){
        altura = parseInt(prompt("Ingrese la altura:"));
        while(isNaN(altura) || altura <0 || altura>250){
            altura = parseInt(prompt("Dato Invalido. Ingrese la altura:"));
        }
        sexo = prompt("Ingrese el sexo indicando con f o m");
        while(!(sexo =="f" || sexo =="m")){
            sexo = prompt("Dato Invalido. Ingrese el sexo indicando con f o m");
        }
        contadorDeAlturas = contadorDeAlturas + altura;
        contadorDeAlturas++;

        if(flag == 0 || altura < AlturaBaja){
            AlturaBaja = altura;
            SexoBajo = sexo;
            flag =1;
            }

        if(sexo == "f" && altura >= 190){
            Mujeres190++;
        }
        }
        PromedioDeAlturas = contadorDeAlturas / 5;


    alert("Promedio de las altura totales es de: "+ PromedioDeAlturas +
    "\nLa altura más baja y el sexo de esa persona es: " + AlturaBaja+" "+SexoBajo+
    "\nLa cantidad de mujeres que superan los 190cm son: "+ Mujeres190);

}
