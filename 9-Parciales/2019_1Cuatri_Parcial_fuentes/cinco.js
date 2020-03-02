function mostrar()
{
    var continentes;
    var cantidadDeDias;
    var precio = 100;
    var PagoDebito;
    var MercadoPago;
    var Efectivo;
    var resultado1;
    var resultado2;
    var FormaDePago;
    var Total;

        
        cantidadDeDias = parseInt(prompt("Ingrese la cantidad de días: "));
        FormaDePago = prompt("Selecciones su forma de pago: Efectivo - PagoDebito - MercadoPago - Otro");
        
        

        continentes = document.getElementById("Marca").value;

        switch(continentes){
            case "América":
                resultado1 = (precio * cantidadDeDias) *0.5;
                    if(FormaDePago == "PagoDebito"){
                    resultado2 = resultado1 * 0.1;
                    Total = resultado1 - resultado2;
                    alert("El total de su compra es de: " + " "+ Total);
                }
                else if(FormaDePago != "PagoDebito" ){
                    resultado1 = (precio * cantidadDeDias) *0.5;
                    Total= resultado1;
                    alert("El total de su compra es de: "+ Total);
                }
            break;

            case "África":
                resultado1 = (precio * cantidadDeDias) *0.6;
                if(FormaDePago == "MercadoPago" || "Efectivo"){
                        resultado2 = resultado1 * 0.15;
                        Total = resultado1 - resultado2;
                        alert("El total de su compra es de: " + " "+ Total);
                        }
             break;

            case "Europa":
                resultado1 = (precio * cantidadDeDias) *0.2;
                if(FormaDePago == "PagoDebito"){
                    resultado2 = resultado1 * 0.15;
                    Total = resultado1 - resultado2;
                    alert("El total de su compra es de: "+ " "+ Total);
                }
                else if(FormaDePago == "MercadoPago"){
                    resultado2= resultado1 * 0.1;
                    Total = resultado1 - resultado2;
                    alert("El total de su compra es de: "+ " "+ Total);
                }
                else{
                    resultado2= resultado1 * 0.05;
                    Total= resultado1 - resultado2;
                    alert("El total de su compra es de: "+ " "+ Total);
                }
                break;
            
            case "Asia":
                resultado1 = (precio * cantidadDeDias) * 1.2;
                Total= resultado1;
                alert("El total de su compra es de: "+ " "+ Total);
                break;
              
            case "Oceania":
                resultado1 = (precio * cantidadDeDias) * 1.2;
                Total= resultado1;
                alert("El total de su compra es de: "+ " "+ Total);
                break;
             }
}
