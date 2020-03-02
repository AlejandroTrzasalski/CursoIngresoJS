function mostrar()
{

    var pais;
    var Habitantes;
    var AcumHabitantes =0;
    var contadorHabitantes = 0;
    var temperatura;
    var TemperaturasPares = 0;
    var flag =0;
    var seguir;
    var TempMin;
    var PaisMin;
    var PromHabitantes;
    var MenosHab;
    var PaisMenosH;
    var AcumPaises=0;

    do{

    
    pais = prompt("Ingrese un pais: ");
    while(!(isNaN(pais))){
        pais = prompt("Dato Invalido. Ingrese un pais: ");
    }
    Habitantes = parseInt(prompt("Ingrese la cantidad de Habitantes. Entre 1 y 7000."));
    while((isNaN(Habitantes) || Habitantes < 1 || Habitantes >7000)){
        Habitantes = parseInt(prompt("Dato Invalido. Ingrese la cantidad de Habitantes. Entre 1 y 7000."));
    }
    temperatura = parseInt(prompt("Ingrese la temperatura del pais. Entre -50 y 50"));
    while((isNaN(temperatura) || temperatura <-50 || temperatura >50)){
        temperatura = parseInt(prompt("Dato Invalido. Ingrese la temperatura del pais. entre -50 y 50"));
    }
    
    if(temperatura % 2 ==0){
        TemperaturasPares++;
    }

    if(flag == 0 || temperatura < TempMin){
        TempMin = temperatura;
        PaisMin = pais;        
    }

    if(flag == 0 || Habitantes < MenosHab){
        MenosHab = Habitantes;
        PaisMenosH = pais;
        flag = 1;
    }

    if(temperatura >= 40){
        AcumPaises++;
    }

    if(Habitantes > 0 ){
        AcumHabitantes = AcumHabitantes + Habitantes;
        contadorHabitantes++;
    }

    seguir = prompt("Desea continuar? Presione -s-. De lo contrario, presione -n-")
   } while(seguir == "s");

   if(contadorHabitantes != 0){
    PromHabitantes = AcumHabitantes / contadorHabitantes;
    }
    
    document.write("a) La cantidad de temperaturas pares es: "+ TemperaturasPares +"</br>");
    document.write("b) El nombre del pais con menos habitantes es: "+PaisMenosH+"</br>");
    document.write("c) La cantidad de paises que superan los 40 grados es: "+AcumPaises+"</br>");
    document.write("d) El promedio de habitantes entre los paises ingresados es: "+PromHabitantes+"</br>");
    document.write("e) La temperatura mínima ingresada es: "+ TempMin+ " y el nombre del pais que registro esa temperatura es: "+ PaisMin+"</br>");


}
