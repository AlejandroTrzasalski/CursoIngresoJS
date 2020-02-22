function mostrar() {

	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var seguir;
	var num;

	do {
		num = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(num)) {
			num = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}

		if (num >= 0) {
			positivo = positivo + num;
		}
		else {
			negativo = negativo * num;
			flag = 1;
		}

		seguir = prompt("Quiere ingresar otro numero?");

	}
	while (seguir == "s");

	if (flag == 0) {
		negativo = 0;
	}



	document.getElementById('producto').value = negativo;
	document.getElementById('suma').value = positivo;

}//FIN DE LA FUNCIÓN