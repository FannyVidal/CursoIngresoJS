function mostrar()
{

	var numero; 
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero < 0 || numero > 10 || isNaN(numero)){ //isNaN() se usa para que las palabras dentro de una caja de texto no sea aceptado

		alert ("El numero no se encuentra dentro del rango");
		numero = parseInt(prompt("Escriba otro numero"));
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN