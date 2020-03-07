function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var edadJoven;
	var nombreJoven;
	var estadoCivilJoven;
	var nombreViejo;
	var sexoViejo;
	var edadViejo;
	var MujeresCasadasOViudaas = 0;
	var contadorEdadMujeres =0;
	var AcumEdadMujeres =0;
	var PromEdadMujeres;
	var contadorHombresSolteros = 0;
	var AcumHombresSolteros = 0;
	var PromHombresSolteros;
	var seguir;
	var flag =0;
	var flag1 =0;

	do{
		nombre = prompt("Ingrese su nombre");
		while(!(isNaN(nombre))){
			nombre = prompt("Dato invalido. Ingrese su nombre");
		}
		edad = parseInt(prompt("Ingrese la edad:"));
		while(isNaN(edad) || edad <18 || edad >100){
			edad = parseInt(prompt("Dato invalido. Ingrese la edad."));
		}
		sexo = prompt("Ingrese el sexo -f- o -m-");
		while(!(sexo == "f" || sexo =="m")){
			sexo = prompt("Dato Invalido. Ingrese sexo -f- o -m-");
		}
		estadoCivil = prompt("Ingrese su estado civil: -soltero- -casado- -viudo-");		
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo" )){
			estadoCivil = prompt("Dato Invalido. Ingrese su estado civil: -soltero- -casado- -viudo-");
		}

		if(estadoCivil == "casado" && flag1 == 0 && sexo == "m" || edad < edadJoven ){
			edadJoven = edad;
			nombreJoven = nombre;
			estadoCivilJoven = estadoCivil ;
			flag1=1;
		}
		if(flag == 0 || edad > edadViejo){
			edadViejo = edad;
			nombreViejo = nombre;
			sexoViejo = sexo;
			flag =1;
		}
		if(sexo == "f" && estadoCivil =="casado" || estadoCivil == "viudo"){
			MujeresCasadasOViudaas++;
		}
		if(sexo == "f"){
			AcumEdadMujeres = edad + AcumEdadMujeres;
			contadorEdadMujeres++;
		}
		if(sexo == "m"){
			AcumHombresSolteros = edad + AcumHombresSolteros;
			contadorHombresSolteros++;
		}
		
			seguir = prompt("Desea contuniar? presione -s-")
		}while(seguir == "s");

	if(contadorEdadMujeres >0){
		PromEdadMujeres = AcumEdadMujeres / contadorEdadMujeres;
	}
	else{
		PromEdadMujeres = "No hay mujeres";
	}

	if(contadorHombresSolteros >0){
		PromHombresSolteros = AcumHombresSolteros / contadorHombresSolteros;
	}
	else{
		PromHombresSolteros = "No hay hombres solteros";
	}


	document.write("a) El nombre del hombre casado más joven es: "+ nombreJoven+"</br>");
	document.write("b) El nombre del pasajero/a más viejo."+ nombreViejo + "y el sexo es: "+ sexoViejo+  "</br>");
	document.write("c) La cantidad de mujeres que hay casadas o viudas."+ contadorEdadMujeres +"</br>");
	document.write("d) El promedio de edad entre las mujeres."+  PromEdadMujeres +"</br>");
	document.write("e) El promedio de edad entre los hombres solteros."+ PromHombresSolteros+"</br>");
}
