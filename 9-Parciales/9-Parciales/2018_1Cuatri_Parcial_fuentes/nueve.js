function mostrar()
{

    var producto;
    var peso;
    var temperatura;
    var respuesta;


    do{

        producto = prompt("Ingrese el nombre de un producto: ");
        
        peso = parseInt(prompt("Ingrese un peso:"));

        temperatura = parseInt(prompt("Ingrese temperatura:"));
        while(isNaN(peso) && isNan(temperatura)){

            peso = parseInt(prompt("Reingrese peso:"));
            temperatura = parseInt(prompt("Ingrese temperatura:"));

        }



    }while( respuesta == "si")

}
