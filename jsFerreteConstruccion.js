/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var LargoDelTerreno;
    var AnchoDelTerreno;
    var resultado;

        LargoDelTerreno = parseInt(document.getElementById("Largo").value);
        AnchoDelTerreno = parseInt(document.getElementById("Ancho").value);
        resultado = (LargoDelTerreno * AnchoDelTerreno) * 3 ;

        alert(resultado);

}
function Circulo () 
{
    var RadioDelTerreno;
    var resultado;

        RadioDelTerreno = parseInt(document.getElementById("Radio").value);
        resultado = ((RadioDelTerreno * 2) * 3.14) * 3 ;

        alert(resultado);
}
function Materiales () 
{
    var LargoDelTerreno;
    var AnchoDelTerreno;
    var BolsaDeCemento;
    var BolsaDeCal;
    

        LargoDelTerreno = parseInt(document.getElementById("Largo").value);
        AnchoDelTerreno = parseInt(document.getElementById("Ancho").value);
        BolsaDeCemento = LargoDelTerreno * AnchoDelTerreno *2;
        BolsaDeCal = LargoDelTerreno * AnchoDelTerreno * 3;
        
        alert("Usted necesita " + BolsaDeCemento + " bolsas de cemento y " + BolsaDeCal + " bolsas de cal.");

    
    

        
}