function mostrar()
{
	var respuesta="si";
	var contador;
	var respuesta;
	var sumaPositivo;
	var sumaNegativo;
	var contPositivo;
	var contNegativo;
	var contCeros;
	var cantPares;
	var promedioNegativo;
	var promedioPositivo;
	
	contador=0;
	sumaNegativo=0;
	sumaPositivo=0;
	contNegativo=0;
	contPositivo=0;
	contCeros=0;
	cantPares=0;
	promedioNegativo=0;
	promedioPositivo=0;

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if(numero<0)
		{
			sumaNegativo=sumaNegativo+numero;
			contNegativo++;
		}
		else
		{
			if(numero>0)
			{
				sumaPositivo=sumaPositivo+numero;
				contPositivo++;
			}
			else
			{
				contCeros++;
			}	
		}

		if(numero%2==0)
		{
			cantPares++;
		}





		respuesta=prompt("ingrese no para salir",);
	}

	promedioNegativo=sumaNegativo/contNegativo;
	promedioPositivo=sumaPositivo/contPositivo;












	console.log("suma de negativos: "+sumaNegativo);
	console.log("suma de positivos: "+sumaPositivo);
	console.log("contador de negativos "+contNegativo);
	console.log("contador de positivos "+contPositivo);
	console.log("contador de ceros "+contCeros);
	console.log("cantidad de pares "+cantPares);
	console.log("promedioNegativo "+promedioNegativo);
	console.log("promedioPositivo "+promedioPositivo);
}//FIN DE LA FUNCIÓN