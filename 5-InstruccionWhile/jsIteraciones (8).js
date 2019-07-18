function mostrar()
{

	var contadorneg = 0;
	var positivo=0;
	var negativo=1;
	var numero;
	

	while(numero >= 0){

		numero = parseInt(prompt("Ingrese número"));

		while(isNaN(numero)){

			alert("Eso no es un número");
			numero = parseInt(prompt("Ingrese un número"));

		}

		positivo = positivo + numero;

		if(numero < 0){

			negativo = negativo * numero;

		

		}

	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN