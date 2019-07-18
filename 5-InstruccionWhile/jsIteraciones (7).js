function mostrar()
{

	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;
	var respuesta = 'si';

	do{

		numero = parseInt(prompt("Ingrese número"));
		acumulador = acumulador + numero;
		contador++;

		numero = prompt("¿Quiere ingresar otro número?");

	} while(respuesta == 'si');

	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN