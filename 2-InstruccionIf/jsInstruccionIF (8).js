function mostrar()
{
//tomo la edad  

var edad
var EstadoCivil 

edad = parseInt(document.getElementById("edad").value);
EstadoCivil = document.getElementById("estadoCivil").value;

if (edad < 18 && EstadoCivil != "Soltero" )
 {
    
}
else{
    (edad <= 18 && EstadoCivil == "Soltero")
    alert("Es soltero y no es menor")
} 


}//FIN DE LA FUNCIÓN