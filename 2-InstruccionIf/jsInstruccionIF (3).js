function mostrar()
{
//tomo la edad  

    var edad ;

    edad = parseInt(document.getElementById("edad").value) ;

    if ( edad >= 18 ){

        alert ("Usted es mayor de edad");
    }

    //con el else no hace falta poner un if solamente se utiliza un alert//
    else{

        alert ("Usted es menor de edad");
    }


}//FIN DE LA FUNCIÓN