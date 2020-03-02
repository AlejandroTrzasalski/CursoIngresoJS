
function mostrar()
{
    var lado;
    var perimetro;
    lado = parseInt(prompt("Ingrese la medida del triangulo equilatero: "));
    while(isNaN(lado)){
        lado = parseInt(prompt("Eso no es un numero valido. Ingrese la medida del triangulo equilatero: "));
    }

   perimetro = lado * 3;

   alert("El perimetro de su triangulo equilatero es de " + perimetro);

}
