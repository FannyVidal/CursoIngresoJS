function mostrar()
{

	var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';

	do{

		numero = parseInt(prompt("Ingrese número"));

		while(isNaN(numero)){

			alert("Eso no es un número");
			numero = parseInt(prompt("Ingrese un número"));

		}

		acumulador = acumulador + numero ;
		contador++;
		respuesta = prompt("¿Quiere ingresar otro numero?");

	}while(respuesta == 'si')


	
//LAS DOS FORMAS ESTAN EXPRESADAS CORRECTAMENTE



//	while(respuesta == 'si'){

//		numero = parseInt(prompt("Ingrese número"));

//		while(isNaN(numero)){

//			alert("Eso no es un número");
//			numero = parseInt(prompt("Ingrese un número"));

//		}

//		acumulador = acumulador + numero ;
//		contador++;
//		respuesta = prompt("¿Quiere ingresar otro numero?");

//	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN