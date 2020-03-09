
function mostrar()
{
	var lado1;
	var lado2;
	var lado3;
	var trianguloIsosceles = "isosceles";
	var trianguloEscaleno = "escaleno";
	

				
		lado1 = parseInt(prompt("Ingrese la longitud del lado1."))	
		while(isNaN(lado1)){
			lado1 = parseInt(prompt("Dato invalido. Ingrese la longitud del lado1."));
		}

		lado2 = parseInt(prompt("Ingrese la longitud del lado2."))	
		while(isNaN(lado2)){
			lado2 = parseInt(prompt("Dato invalido. Ingrese la longitud del lado2."));
		}

		lado3 = parseInt(prompt("Ingrese la longitud del lado3."))	
		while(isNaN(lado3)){
			lado3 = parseInt(prompt("Dato invalido. Ingrese la longitud del lado3."));
		}
		

		if(lado1 == lado2 || lado1 == lado3){
			document.write("El triangulo es: "+ trianguloIsosceles);
		}
		else{
			document.write("El triangulo es: "+trianguloEscaleno);
		}
	
	


}
