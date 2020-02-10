/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    var num2;
    var num3;
    var resultado;

        num1 = parseFloat(document.getElementById("PrecioUno").value);
        num2 = parseFloat(document.getElementById("PrecioDos").value);
        num3 = parseFloat(document.getElementById("PrecioTres").value);

        resultado = num1 + num2 + num3;

        alert(resultado);


}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    var resultado;

        num1 = parseFloat(document.getElementById("PrecioUno").value);
        num2 = parseFloat(document.getElementById("PrecioDos").value);
        num3 = parseFloat(document.getElementById("PrecioTres").value);

        resultado = (num1 + num2 + num3)/3 ;

        alert(resultado);
	
}
function PrecioFinal () 
{
    var num1;
    var num2;
    var num3;
    var resultado;

        num1 = parseFloat(document.getElementById("PrecioUno").value);
        num2 = parseFloat(document.getElementById("PrecioDos").value);
        num3 = parseFloat(document.getElementById("PrecioTres").value);

        resultado = (num1 + num2 + num3) * 1.21 ;

        alert(resultado);
	
}