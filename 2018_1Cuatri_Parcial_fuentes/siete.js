function mostrar()
{
    var nota;
    var sexo;
    var contadorV6 = 0;
    var acumulador = 0;
    var notaBaja;
    var sexoBajo;
    var promedio;
    var flag = 0;

    for(var i = 0; i < 5; i ++){

        nota = parseInt(prompt("Ingrese nota:"));

        while(nota < 0 || nota > 10 || isNaN(nota)){

            nota = parseInt(prompt("No es una nota valida, reingrese nota:"));

        }

        sexo = prompt("Ingrese sexo:");

        while(!(sexo == 'm' || sexo == 'f')){

            sexo = prompt("Sexo no valido, reingrese sexo:");

        }

        acumulador = acumulador + nota;

        if(nota < notaBaja || flag == 0){

            notaBaja = nota;
            sexoBajo = sexo;
            flag = 1;

        }

        if(sexo == 'm' && nota >= 6){

            contadorV6 ++;

        }

    }

    promedio = acumulador / 5;

    alert("Promedio de notas: " + promedio + "\nNota baja: " + notaBaja + "\nSexo de la nota más baja: " + sexoBajo + "\nCantidad de varones aprobados: " + contadorV6);

}