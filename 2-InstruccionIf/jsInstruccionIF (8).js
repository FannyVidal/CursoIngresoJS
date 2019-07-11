function mostrar()
{
//tomo la edad  
var edad;
var estad;

edad = parseInt(document.getElementById("edad").value);
//hay que traer el estado civil para fucionar ambos
estado = document.getElementById("estadoCivil").value;

if ( edad >=18 && estado == "Soltero" ){

    alert ("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN