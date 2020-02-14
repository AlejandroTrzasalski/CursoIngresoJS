function mostrar()
{
//tomo la edad  

var edad

edad = parseInt(document.getElementById("edad").value);

if(edad <13 ) {
    alert("Sos Niño");
}
else if (edad <=17 ){
    alert("Sos Adolescente");
}
else{
    alert("Sos Adulto");
}



}//FIN DE LA FUNCIÓN