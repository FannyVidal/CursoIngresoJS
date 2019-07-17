function mostrar()
{

var clave = prompt("ingrese clave.");

while (clave != "utn750"){ //se puede afirmar la condicion y negarla al principio con !

    alert ("Clave incorrecta. Reintente");
    clave = prompt("Reingrese clave:");
}

alert ("Clave correcta: " + clave);

}//FIN DE LA FUNCIÓN
