function mostrar()
{

	
	// declarar variables
	
	var flag = 0;
	var maximo;
	var minimo;
	var respuesta;
	var num;

	do {
		num = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if(flag == 0 || num > maximo){
			maximo = num;
		}
		if(flag == 0 || num < minimo){
			minimo = num;
			flag = 1;
		}

		respuesta = prompt("Quiere ingresar otro numero?");

	}while(respuesta == "si");


	

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN