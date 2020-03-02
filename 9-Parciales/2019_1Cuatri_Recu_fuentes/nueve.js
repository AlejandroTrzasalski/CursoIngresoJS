function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var nota;
    var contadorVaronesAprob = 0;
    var contadorMasc = 0;
    var contadorFem = 0;
    var contadorMenores = 0;
    var contadorAdolescentes =0;
    var contadorMayores =0;
    var AcumNotaMasc = 0;
    var AcumNotaFem = 0;
    var AcumNotaAdolescente = 0;
    var AcumNotaMayores = 0;
    var AcumNotaMenores = 0;
    var seguir;
    var PromNotaMenores;
    var PromNotaAdolescentes;
    var PromNotaMayores;
    var PromNotaMasc;
    var PromNotaFem;

        do{
            nombre = prompt("Ingrese su nombre.");
            while(!(isNaN(nombre))){
                nombre = prompt("Dato Invalido. Ingrese su nombre");
            }
            edad = parseInt(prompt("Ingrese su edad."))
            while(isNaN(edad) || edad >100){
                edad = parseInt(prompt("Dato Invalido. Ingrese su edad."));
            }
            sexo = prompt("Ingrese su sexo. Indicandolo con -f- o -m-");
            while(sexo != "f" && sexo != "m" ){
                sexo = prompt("Dato Invalido. Ingrese su sexo con -f- o -m-");
            }
            nota = parseInt(prompt("Ingrese su nota."));
            while(isNaN(nota) || nota<0 || nota>10){
                nota= parseInt(prompt("Dato Invalido. Ingrese su nota."))
            }
            if (sexo !="f" && nota >=0) {
                AcumNotaMasc = AcumNotaMasc + nota;
                contadorMasc++;
            }

            if (sexo !="m" && nota >=0) {
                AcumNotaFem = AcumNotaFem + nota;
                contadorFem++;
            }         
            if(sexo != "f" && nota >= 4){
                contadorVaronesAprob++;
            }
            if(edad >=13 && edad <=17){
                AcumNotaAdolescente = AcumNotaAdolescente + nota;
                contadorAdolescentes++;
            }
            else if(edad >18){
                AcumNotaMayores = AcumNotaMayores + nota;
                contadorMayores++;
            }
            if(edad <13 && edad >=0){
                AcumNotaMenores = AcumNotaMenores + nota;
                contadorMenores++;
            }           

            seguir = prompt("Desea continuar? Presione -s- para continuar o -n- para finalizar.")
        }while(seguir == "s");

        PromNotaMenores = AcumNotaMenores / contadorMenores;
        PromNotaAdolescentes = AcumNotaAdolescente / contadorAdolescentes;
        PromNotaMayores = AcumNotaMayores / contadorMayores;
        PromNotaMasc = AcumNotaMasc / contadorMasc;
        PromNotaFem = AcumNotaFem / contadorFem;

        document.write("La cantidad de varones aprobados es: "+ contadorVaronesAprob+"</br>" );
        document.write("El promedio de notas de los menores de edad es: "+ PromNotaMenores+"</br>" );
        document.write("El promedio de notas de los adolescentes es : "+ PromNotaAdolescentes+"</br>" );
        document.write("El promedio de notas de los mayores es : "+ PromNotaMayores+"</br>" );
        document.write("El promedio de notas masculino es: "+ PromNotaMasc+ " Y el promedio de notas femenino es: "+ PromNotaFem+"</br>");

}
