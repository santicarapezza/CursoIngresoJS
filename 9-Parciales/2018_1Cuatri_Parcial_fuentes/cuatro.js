/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados. Si el primero es mayor, los resto, de lo contrario los sumo.
Si la suma es mayor a 10, además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero
el 10".*/
function mostrar()
{
	var unnumero;
	var otronumero;
	var suma;

	unnumero=prompt("Ingrese un numero");
	otronumero=prompt("Ingrese otro numero");

	unnumero=parseInt(unnumero);
	otronumero=parseInt(otronumero);

	if(unnumero==otronumero)
	{
			alert(unnumero+ "y" +otronumero);
	}
	else
	{
		if(unnumero>otronumero)
		{
			alert(unnumero-otronumero);
		}
		else
		{
			suma = otronumero+unnumero;
			alert(suma);
			if(suma>10)
			{
				alert("la suma es " +suma+ " y supero el 10")
			}
		}
	}
}
