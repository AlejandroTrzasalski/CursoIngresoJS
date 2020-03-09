function mostrar()
{
  var TipoProd;
  var precio;
  var Litros;
  var Marca;
  var flag = 0;
  var AcumPrecio =0;
  var JabonCaro;
  var MarcaCara;
  var PrecioCaro;
  var contadorChampuesMas2L =0;
  var PrecioBarato;
  var CloroBarato;
  var MarcaBarata;
  var flag1 = 0;
  


    for(var i =0;i<=5;i++){

      TipoProd = prompt("Ingrese el tipo de producto. -Champu- -Jabon- -Cloro-");
        while(!(TipoProd == "Champu" || TipoProd == "Jabon" || TipoProd == "Cloro")){
          TipoProd = prompt("Dato Invalido. Ingerese -Champu- -Jabon- -Cloro-");
        }
        
      precio = parseInt(prompt("Ingrese el precio del producto. Entre 10 y 250"));
      while(isNaN(precio) || precio < 10 || precio > 250){
        precio = parseInt(prompt("Dato Invalido. Ingrese el precio del producto. Entre 10 y 250"))
      }

      Litros = parseInt(prompt("Ingrese la cantidad de Litros. Entre 1 y 5"));
      while(isNaN(Litros) || Litros < 1 || Litros >5){
        Litros = parseInt(prompt("Dato Invalido. Ingrese la cantidad de Litros. Entre 1 y 5"))
      }

      Marca = prompt("Ingrese la marca del producto");

      if(TipoProd == "Jabon" && flag == 0 || precio > PrecioCaro){
        PrecioCaro = precio;
        JabonCaro = TipoProd;
        MarcaCara = Marca;
        flag=1;
      }
      if(TipoProd == "Cloro" && flag1 == 0 || precio < PrecioBarato){
        PrecioBarato = precio;
        CloroBarato = TipoProd;
        MarcaBarata = Marca;
        flag1=1;
      }
      if(TipoProd == "Champu" && Litros >2){
        contadorChampuesMas2L++;
      }
    }

    document.write("a) Del más caro de los jabones, la marca es: "+ MarcaCara+"</br>");
    document.write("b) Del más barato de los cloros, la marca es: "+MarcaBarata+"</br>");
    document.write("c) La cantidad de champues de mas de 2L es: "+contadorChampuesMas2L);

}
