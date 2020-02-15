function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;

switch(mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;


    case "Julio" :
    case "Agosto" :
        alert("Abrigate que hace frio");
        break;

    
    
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert("Ya paso el frio, ahora calor!");
        

}





}//FIN DE LA FUNCIÓN