/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var p1;
    var p2;
    var p3;
    var suma;

    p1 = parseFloat(document.getElementById("PrecioUno").value);
    p2 = parseFloat(document.getElementById("PrecioDos").value);
    p3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = p1 + p2 + p3;

    alert("La suma es " + suma);
    

}
function Promedio () 
{
    var p1;
    var p2;
    var p3;
    var promedio;

    p1 = parseFloat(document.getElementById("PrecioUno").value);
    p2 = parseFloat(document.getElementById("PrecioDos").value);
    p3 = parseFloat(document.getElementById("PrecioTres").value);

    promedio = (p1 + p2 + p3) / 3;

    alert("El promedio es " + promedio);
	
}
function PrecioFinal () 
{
    var p1;
    var p2;
    var p3;
    var suma;
    var iva;
    var total;

    p1 = parseFloat(document.getElementById("PrecioUno").value);
    p2 = parseFloat(document.getElementById("PrecioDos").value);
    p3 = parseFloat(document.getElementById("PrecioTres").value);

    suma = p1 + p2 + p3;

    iva = suma * 0.21;

    total = suma + iva;

    alert("El precio final es " + total);
    

}