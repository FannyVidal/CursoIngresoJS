function mostrar()
{

	var contador=0;
	var numero;
	var positivos = 0;
	var negativos = 0;
	var ceros;
	var par;
	var promedioPositivos;
	var promedioNegativos;
	var seguir;

	do{

		numero = parseInt(prompt("Ingrese numero"));

		while(isNaN(numero)){

			alert("Eso no es un número");
			numero = parseInt(prompt("Ingrese un número"));

		}

		if( numero > 0 ){

			positivos = positivos + numero;
			contador++;

		}
		if( numero < 0 ){

			negativos = negativos + numero;
			contador++;

		}else{

			ceros = ceros + numero;
			contador++;

		}

		seguir = prompt("¿Quiere ingresar otro número?");
	
	}while(seguir == 'si');






}//FIN DE LA FUNCIÓN