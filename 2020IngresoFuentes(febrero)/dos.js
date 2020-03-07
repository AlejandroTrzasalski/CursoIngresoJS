function mostrar()
{
  var kilos;
  var precio;
  var tipoProd;
  var PrecioXKilo;
  var total1;
  var total2;
  var TotalAcumPrecioXKilo;
  var TotalAcumPrecioXKilo2;
  var TipoProdMasCaro;
  var PrecioMAsCaro;
  var acumPrecio =0;
  var acumKilo =0;
  var flag =0;

  var seguir;

  do{
    kilos = parseInt(prompt("Ingrese la cantidad de kilos del producto. Entre 10 y 1000"));
    while(isNaN(kilos) || kilos < 10 || kilos >1000){
      kilos = parseInt(prompt("Dato invalido. Ingrese la cantidad de kilos del producto. Entre 10 y 1000"))
    }
    precio = parseInt(prompt("Ingrese el precio del producto."))
    while(isNaN(precio) || precio <1){
      precio = parseInt(prompt("Dato invalido. Ingrese el precio del producto."));
    }
    tipoProd = prompt("Ingrese el tipo de producto. -vegetal- -animal- -mezcla-");
    while(!(tipoProd == "vegetal" || tipoProd == "animal" || tipoProd == "mezcla")){
      tipoProd = prompt("Dato invalido. Ingrese el tipo de producto. -vegetal- -animal- -mezcla- ");
    }

    if(kilos >= 100 && kilos <=299){
      total1 = (kilos * precio) * 0.15
    }
    if(kilos >=300){
      total2 = (kilos * precio) * 0.25
    }

    PrecioXKilo = kilos * precio;

    if(flag == 0 || precio > PrecioMAsCaro){
      PrecioMAsCaro = precio;
      TipoProdMasCaro = tipoProd;
      flag=1;
    }

    if(precio !=0 && kilos !=0){
      acumKilo= kilos + acumKilo;
      acumPrecio = precio + acumPrecio;
    }
    TotalAcumPrecioXKilo2 = (acumKilo * precio) + acumPrecio
    

    seguir = prompt("Desea continuar? presione -s-")
  }while(seguir == "s");

  TotalAcumPrecioXKilo = (acumPrecio / acumKilo);

    document.write("a) El importe total a pagar , bruto sin descuento es: "+ +"</br>");

    if(kilo >100 && kilos <=299){
    document.write("Los kilos superaron los 100Kg. Obtiene un descuento del 15%. Su total es: "+total1 +"</br>" );
    }
    if(kilos >=300){
      document.write("Los kilos superaron los 300kg. Obtiene un descuento del 25%. Su total es: "+total2 + "</br>");
    }

    document.write("d) El tipo de alimento más caro es: "+TipoProdMasCaro +"</br>");
    document.write("f) El promedio de precio por kilo en total es: "+TotalAcumPrecioXKilo + "</br>");

}
