function mostrar()
{
	var precio;
	var talle;
	var sexo;
	var seguir;

	do{

		precio = parseInt(prompt("Ingrese el precio del producto entre 100 y 9000"));
		while(isNaN(precio) || precio < 100 || precio > 9000){
			precio = parseInt(prompt("Dato Invalido. Ingrese el precio del producto entre 100 y 9000"))
		}

		talle = prompt("Ingrese el talle: -XL- -L- -M- -S-");
		while(!(talle == "XL" || talle == "L" || talle == "M" || talle == "S")){
			talle = prompt("Dato Invalido. Ingrese el talle: -XL- -L- -M- -S-")
		}

		sexo = prompt("Ingrese el sexo. -f- o -m-");
		while(!(sexo == "f" || sexo == "m")){
			sexo = prompt("Dato Invalido. Ingrese el sexo. -f- o -m-");
		}

		seguir = prompt("Desea continuar? Presione -s-");
	}while(seguir == "s");
}
