function mostrar()
{
//tomo la edad  

var edad;

//se toma la variable edad del html y se la convierte en numero//
edad = parseInt(document.getElementById("edad").value);

 //la condicion del if debe ser que la persona que ingrese su edad siendo mayor o igual a 18
 //le muestre un alert diciendo que es mayor de edad//
if ( edad >= 18 ){

    alert ("Usted es mayor de edad.");

}


}//FIN DE LA FUNCIÓN