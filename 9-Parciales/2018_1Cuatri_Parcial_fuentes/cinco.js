function mostrar()
{

    var nota;
    var sexo = F || M;
    var promedio;
    var contadorVaronesMas6 = 0;
    var acumuladorNotas = 0;
    var notaBaja;
    var sexoBajo;
    var flag = 0;

    for(var i = 0; i < 5; i++){
        nota = prompt("Ingrese su nota");
        sexo = prompt("Ingrese el sexo");
        if(sexo != "F".toUpperCase || "M".toUpperCase){
            alert("Ingrese F para sexo Femenino o M para sexo Masculino");
        }
        while(isNaN(nota)){
        if(nota >=10){
            alert("Ingrese un numero entre 0 y 10");
        }
        }
    } 
   
    

}
