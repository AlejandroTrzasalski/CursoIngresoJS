function mostrar()
{
  var nombre1;
  var nombre2;
  var kilos1;
  var kilos2;
  var sumadeKilos;
  var promedioPeso;

  nombre1 = prompt("Ingrese su nombre: ");
  nombre2 = prompt("Ingrese el nombre de su pareja: ");
  kilos1 = parseInt(prompt("Ingrese su peso en Kilos: "));
  kilos2 = parseInt(prompt("Ingrese el peso en Kilos de su pareja: "));

    sumadeKilos= kilos1+kilos2;
    promedioPeso= sumadeKilos/2;

  alert("Ustedes se llaman: " + nombre1 + " "+ "y"+ " " + nombre2 + "," + " "+"pesan" + " " + kilos1 + " " +  "y"+ " " +kilos2+ " "+ "kilos, que sumados son" + " "+  sumadeKilos+ " "+ "kilos y el promedio de peso es:" +" "+ promedioPeso);

}
