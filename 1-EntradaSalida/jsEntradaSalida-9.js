/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo ;
    var aumento ;
    var nuevoSueldo ;

    //el sueldo viene en texto asi que hay que convertirlo en numero
    sueldo = parseFloat(document.getElementById("sueldo").value) ;
    //calculo el aumento multiplicandolo por 0.1 osea el 10%
    aumento = sueldo * 0.1 ;
    //el nuevo sueldo seria la suma de sueldo mas el aumento
    nuevoSueldo = sueldo + aumento ;
    //para mostrar el nuevo sueldo en la caja de RESULTADO 
    document.getElementById("resultado").value = nuevoSueldo ;
   
    
}
