/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var LargoDelTerreno = parseInt(document.getElementById("Largo").value);
    var AnchoDelTerreno = parseInt(document.getElementById("Ancho").value);
    var resultado;

    resultado = LargoDelTerreno * AnchoDelTerreno;
    alert("La canitad de alambre a comprar es de  "  +  resultado * 3 );

}
function Circulo () 
{
    var RadioDelTerreno = parseInt(document.getElementById("Radio").value);
    var resultado;

    resultado = RadioDelTerreno * 2;
    alert("La canitad de alambre a comprar es de  "  +  resultado * 3 );
	
}
function Materiales () 
{
	var LargoDelTerreno = parseInt(document.getElementById("Largo").value);
    var AnchoDelTerreno = parseInt(document.getElementById("Ancho").value);
    var resultado;
    var cemento;
    var cal;

    resultado = LargoDelTerreno * AnchoDelTerreno;
    cemento = resultado * 2;
    cal = resultado * 3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}