/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var T = document.getElementById("Temperatura").value;
    var F;

    F = (T - 32) * 5 / 9;
    alert(F.toFixed(2) + " grados centigrados");
}

function CentigradosFahrenheit () 
{
	var T = document.getElementById("Temperatura").value;
    var C;

    C = (9/5) * T + 32;
    alert(C.toFixed(2) + " grados fahrenheit");
}
