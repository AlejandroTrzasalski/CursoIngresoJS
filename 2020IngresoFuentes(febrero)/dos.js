function mostrar()
{
  var peso=0;
var precio= 0;
var tipo;
var acumuladorPeso;
var precioDescuento25;
var importeTotal;
var promedio;
var flag=0
var tipoCaro;
var preciomax;

  do
  peso=parseInt (prompt(" Ingrese peso:"));
  while ( peso< 10 || peso > 100){
    peso=parseInt(prompt( "Ingrese peso valido, ente 10 y 1000"));
  }
  acumuladorPeso= peso + acumuladorPeso;
  precio= parseInt( prompt( "Ingrese el precio" ));
  while ( precio < 1 );{
  precio=parseInt(prompt( "el precio debe ser mayor a 0" ));}
  tipo = promp( " ingrese el producto");
while (tipo== v || tipo == a || tipo == m);{
tipo( prompt (" incorrecto. Debe ingresar v, a,m ") );
}

seguir= prompt( "¿Desea seguir ingresando datos? S/N" ).toLowerCase();
while( seguir== "S" || seguir =="N");

if(acumuladorpeso >100);{

  precioDescuento= importeTotal*.85;
}
 if ( acumuladorPeso= 300 ){
precioDescuento= importeTotal*0.75;}
 if (flag == precio || precio > precioMax ){
 precioMax = precio
 tipoCaro=tipo
flag=1}
promedioprecio= (importetotal + precioDto);
}
document.write(" El importe bruto total a pagar es:"+ importeTotal+ "<br>");

if ( peso > 100 && peso < 300 ){
  document.write("El importe con 25% a pagar es:"+ precioDto + "<br>" );



}