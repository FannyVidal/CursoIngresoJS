function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();

while(sexo != 'f' && sexo != 'm'){

    alert ("Dato invalido");
    sexo = prompt("Ingrese f ó m");
    sexo = sexo.toLowerCase(); //para convertir los numero que vienen en mayuscula a minuscula

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN