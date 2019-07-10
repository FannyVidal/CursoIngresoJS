function mostrar()
{
//tomo la edad  

    var edad;

    edad = parseInt(document.getElementById("edad").value);

    //COMPARAR CON EJERCICIO 4//
    // if ( !(edad >=13 && edad <= 17) )
    //es la misma forma de poner lo mismo que abajo solo que acá se lo niega de entrada
    
    if (edad < 13 || edad > 17){

        alert ("No es adolescente");

    }

}//FIN DE LA FUNCIÓN