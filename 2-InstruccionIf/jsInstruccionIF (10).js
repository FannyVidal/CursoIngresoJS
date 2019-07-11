function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	//en esta variable se guarda el num aleatorio
	var nota;
	

	nota = Math.floor(Math.random() * 10 + 1);

	//El tope limite es 10 asi que no hace falta restringir el numero hasta el 10
	if( nota >= 9 ){
		//si entro entro a este if es por que la nota es 9 o 10
		//para que quede mas ordenado y prolijo hay q concadenar texto con la variable
		alert (nota ("Nota: " + nota + " EXCELENTE"));
	}
	else{
		//por logica se van a tomar los numeros mayores a 3 hasta el 9 por el primer if
		// nota > 3 es lo mismo que decir nota >= 4
		if( nota > 3 ){

			alert ("Nota: " + nota + " Aprobó");
		}
		//por descarte se van a tomar todos los numeros menores a 3 inclusive
		else{
			
			alert("Nota: " + nota + " Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN