function mostrar()
{

	var numero;
	var contador = 0;
	// aka suma 
	var acumulador = 0;
	var promedio;

	while (contador < 5 ){
		//hay que tomar en cuenta que dentro del repetidor se debe poner lo que se repita en este caso serian
		//los numeros que se piden y las veces que se suma
		numero = parseInt(prompt("Ingrese número: "));
		acumulador = acumulador + numero ;
		//el ++ significa contador + 1
		contador++;
	}

	promedio = acumulador / 5;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN