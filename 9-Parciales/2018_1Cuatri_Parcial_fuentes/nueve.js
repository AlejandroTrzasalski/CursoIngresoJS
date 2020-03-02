function mostrar() {

    var peso;
    var marca;
    var Temperatura;
    var ContadorTmpPares = 0;
    var CantProdMenosde0grados = 0;
    var AcumPeso = 0;
    var MarcaProdMasPesado;
    var MarcaPesada;
    var PromedioPeso;
    var PesoMax;
    var PesoMin;
    var seguir;
    var flag = 0;
    var contador = 0;

    do {
        marca = prompt("Ingrese marca: ");

        peso = parseInt(prompt("Ingrese un numero entre 1 y 100: "));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso entre 1 y 100: "));
        }
        Temperatura = parseInt(prompt("Ingrese temperatura entre -30 y 30: "));
        while (isNaN(Temperatura) || Temperatura < -30 || Temperatura > 30) {
            Temperatura = parseInt(prompt("Temperatura invalida. Ingrese temperatura entre -30 y 30: "));
        }
        
        if (Temperatura % 2 == 0) {
            ContadorTmpPares++;

        }
        
        if (flag == 0 || peso > MarcaProdMasPesado) {
            MarcaProdMasPesado = peso;
            MarcaPesada = marca;
            flag = 1;
        }
        
        if (Temperatura < 0) {
            CantProdMenosde0grados++;
        }

        AcumPeso = AcumPeso + peso;

        
        if (contador == 0 || peso > PesoMax) {
            PesoMax = peso;
        }
        
        if (contador == 0 || peso < PesoMin) {
            PesoMin = peso;
        }
        contador++;

        seguir = prompt("Quiere continuar?");
    } while (seguir == 's');
    

    PromedioPeso = AcumPeso / contador;

    if (flag == 0) {
        MarcaPesada = "sin datos";
    }

    document.write("a) La cantidad de temperaturas pares: " + ContadorTmpPares + "</br>");
    document.write("b) La marca del producto mas pesado es: " + MarcaPesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + CantProdMenosde0grados + "</br>");
    document.write("d) El promedio del peso de todos los productos es : " + PromedioPeso + "</br>");
    document.write("e) El peso máximo es : " + PesoMax + "</br>");
    document.write("f) El peso minimo es : " + PesoMin + "</br>");

}

