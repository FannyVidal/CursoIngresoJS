function mostrar()
{
//tomo la edad  

var edad ;

edad = parseInt(document.getElementById("edad").value) ;

//se usa el && para comparar con ambas condiciones (igual que la tabla de verdad)//
if (edad >= 13 && edad <= 17){

    alert ("Usted es un adolescente");

}

}//FIN DE LA FUNCIÓN