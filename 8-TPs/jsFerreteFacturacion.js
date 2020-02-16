/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    var resultado;

    resultado = num1 + num2 + num3;
    alert("El resultado es " + resultado);
}
function Promedio () 
{
	var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    var resultado;

    resultado = (num1 + num2 + num3 ) / 3;
    alert("El resultado es " + resultado);
}
function PrecioFinal () 
{
	var num1 = parseInt(document.getElementById("PrecioUno").value);
    var num2 = parseInt(document.getElementById("PrecioDos").value);
    var num3 = parseInt(document.getElementById("PrecioTres").value);
    var resultado;

    resultado = (num1 + num2 + num3 ) * 1.21;
    alert("El resultado es " + resultado);

}