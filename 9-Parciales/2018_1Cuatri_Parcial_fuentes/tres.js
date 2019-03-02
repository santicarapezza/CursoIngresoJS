/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por
id.*/

function mostrar()
{
	var precio;
	var descuento;
	var preciocondescuento;

	precio =prompt("Ingrese el precio del producto");
	descuento =prompt("Ingrese el descuento");

	precio =parseInt(precio);
	descuento =parseInt(descuento);

	preciocondescuento =precio - (precio*descuento/100);

	document.getElementById('preciofinal').value = (preciocondescuento);

}
