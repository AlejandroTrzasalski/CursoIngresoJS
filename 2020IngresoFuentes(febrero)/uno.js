
function mostrar()
{
	var tipoProd;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	var BarbijoPrecioMaxFabricante;
	var BarbijoPrecioMaxCantidad;
	var BarbijoPrecioMax;
	var AcumUniJabon = 0;
	var ItemMasUni;
	var seguir;
	var flag =0;
	var flag1 =0;
	var unidadMAx;
	var unidadMAxFabricante;

		
	for(var i = 0; i <5; i++ ){
	
			precio = parseInt(prompt("Ingrese el precio del producto entre 100 y 300:"));
			while(isNaN(precio) || precio < 100 || precio >300){
				precio = parseInt(prompt("Dato invalido. Ingrese el precio del producto entre 100 y 300:"));
			}
			unidades = parseInt(prompt("Ingrese la cantidad de unidades del producto entre 0 y 1000: "));
			while(isNaN(unidades) || unidades < 1 || unidades > 1000){
				unidades = parseInt(prompt("Dato invalido. Ingrese la cantidad de unidades del producto entre 0 y 1000: "));
			}
			tipoProd = prompt("Ingrese el tipo de producto. -barbijo- -jabon- -alcohol-");
			while(!(tipoProd == "jabon" || tipoProd == "barbijo" || tipoProd == "alcohol")){
			  tipoProd = prompt("Dato invalido. Ingrese el tipo de producto. -barbijo- -jabon- -alcohol- ");
			}
			marca = prompt("Ingrese la marca");
			fabricante = prompt("Ingrese el fabricante");

			if(tipoProd == "barbijo" && flag == 0 || precio > BarbijoPrecioMax){
				BarbijoPrecioMax = precio;
				BarbijoPrecioMaxFabricante = fabricante;
				BarbijoPrecioMaxCantidad = unidades;
				flag=1;
			}

			if(flag1 == 0 || unidades > unidadMAx ){
				unidadMAx = unidades;
				unidadMAxFabricante = fabricante;
				flag1 = 1;
			}
			if(tipoProd =="jabon"){
				AcumUniJabon = unidades + AcumUniJabon;
			}
			
		}

			document.write("a)Del más caro de los Barbijos, la cantidad de unidades es: "+BarbijoPrecioMaxCantidad+"</br>"+" y el fabricante es: "+ BarbijoPrecioMaxFabricante+"</br>");
			document.write("b) Del ítem con más unidades, el fabricante es: "+ unidadMAxFabricante+"</br>");
			document.write("c) La cantidad total de jabon es: "+ AcumUniJabon);
}
