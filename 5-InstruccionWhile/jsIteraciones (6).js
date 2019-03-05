function mostrar()
{

	var contador;
	var acumulador;
	var numero;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numero=prompt("Ingrese un numero","escriba aqui");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
		++contador;
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN