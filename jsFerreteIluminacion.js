/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var CantidadDeLamparas = parseInt(document.getElementById("Cantidad").value);
     var PrecioDeLamparas = 35;
     var Precio = CantidadDeLamparas * PrecioDeLamparas;
     var Marca = document.getElementById("Marca").value;
     var PrecioConDescuento;
     var DiferenciaDeIIBB;

    switch(Marca){
        case "ArgentinaLuz":
                if(CantidadDeLamparas >=6){
              PrecioConDescuento =  Precio * 0.5 + Precio;
               document.getElementById("precioDescuento").value = PrecioConDescuento;
            }

                else if (CantidadDeLamparas ==5) {
                PrecioConDescuento =  Precio * 0.4 + Precio;
               document.getElementById("precioDescuento").value = PrecioConDescuento;
            }

                else if (CantidadDeLamparas == 4){
                PrecioConDescuento =  Precio * 0.25 + Precio;
               document.getElementById("precioDescuento").value = PrecioConDescuento;
            }

                else if (CantidadDeLamparas ==3){
                PrecioConDescuento =  Precio * 0.15 + Precio ;
                document.getElementById("precioDescuento").value = PrecioConDescuento;
            }

            break;

        case "FelipeLamparas":
                if(CantidadDeLamparas >=6){
                PrecioConDescuento =  Precio * 0.5 + Precio;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }

                else if (CantidadDeLamparas ==5) {
                  PrecioConDescuento =  Precio * 0.3 + Precio;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
               }

                else if (CantidadDeLamparas == 4){
                    PrecioConDescuento =  Precio * 0.25 + Precio;
                   document.getElementById("precioDescuento").value = PrecioConDescuento;
              }

                else if (CantidadDeLamparas ==3){
                PrecioConDescuento =  Precio * 0.10 + Precio;
                document.getElementById("precioDescuento").value = PrecioConDescuento;
            }
            break;

        case "JeLuz":
                if(CantidadDeLamparas >=6){
                PrecioConDescuento =  Precio * 0.5 + Precio ;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }

                else if (CantidadDeLamparas ==5) {
                  PrecioConDescuento = Precio * 0.3 + Precio;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }

                else if (CantidadDeLamparas == 4){
                PrecioConDescuento =  Precio * 0.20 + Precio;
               document.getElementById("precioDescuento").value = PrecioConDescuento;
          }

                else if (CantidadDeLamparas ==3){
            PrecioConDescuento =  Precio * 0.05 + Precio;
            document.getElementById("precioDescuento").value = PrecioConDescuento;
        }
            break;

        case "HazIluminacion":
                if(CantidadDeLamparas >=6){
                PrecioConDescuento =  Precio * 0.5 + Precio;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }

                else if (CantidadDeLamparas ==5) {
                  PrecioConDescuento =  Precio * 0.3 + Precio;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }

                else if (CantidadDeLamparas == 4){
                PrecioConDescuento =  Precio * 0.20 + Precio;
               document.getElementById("precioDescuento").value = PrecioConDescuento;
          }

                else if (CantidadDeLamparas ==3){
            PrecioConDescuento =  Precio * 0.05 + Precio;
            document.getElementById("precioDescuento").value = PrecioConDescuento;
        }
            break;

        case "Osram":
                if(CantidadDeLamparas >=6){
                PrecioConDescuento =  Precio * 0.5 + Precio ;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }
                else if (CantidadDeLamparas ==5) {
                  PrecioConDescuento =  Precio * 0.3 + Precio;
                 document.getElementById("precioDescuento").value = PrecioConDescuento;
              }
                else if (CantidadDeLamparas == 4){
                PrecioConDescuento =  Precio * 0.20 + Precio;
               document.getElementById("precioDescuento").value = PrecioConDescuento;
          }
                else if (CantidadDeLamparas ==3){
            PrecioConDescuento =  Precio * 0.05 + Precio;
            document.getElementById("precioDescuento").value = PrecioConDescuento;
        }
            break;
        }
            if(PrecioConDescuento >120){
                DiferenciaDeIIBB = PrecioConDescuento * 1.1 - PrecioConDescuento  ;
                alert("IIBB Ud. pago " + DiferenciaDeIIBB.toFixed(2));
            }
           
                
                
            
    
         
        
        
        
}
