function mostrar()
{
    var precio;
    var porcentajeDto;
    var PrecioFinal;

    precio = parseInt(prompt("Ingrese el precio del producto: "));
    while(isNaN(precio)){
        precio = parseInt(prompt("Dato invalido. Ingrese el precio del producto: "));
    }
    porcentajeDto = parseInt(prompt("Ingrese el % del descuento debido:"));
    while(isNaN(porcentajeDto)){
        porcentajeDto = parseInt(prompt("Dato invalido. Inrese el % del descuento sin el signo de %"));
    }
    porcentajeDto = precio * porcentajeDto / 100;
    PrecioFinal = precio - porcentajeDto;

    document.getElementById("elPrecioFinal").value = PrecioFinal;

}
