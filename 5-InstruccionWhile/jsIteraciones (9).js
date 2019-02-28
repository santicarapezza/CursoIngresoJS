function mostrar()
{

	var contador;
	var respuesta;
	var numeroMax;
	var numernoMin;
	var numeroIngresado;
	var bandera;


	// declarar variables
	contador=0;
	respuesta="si";
	//numeroMax=-9999;
	//numernoMin=9999;
	bandera=0;

	while(respuesta!='no')
	{
		
	

		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);
		
		if(bandera==0)
		{
			numeroMax=numeroIngresado;
			numernoMin=numeroIngresado;
			bandera=1;


		}else
		
		if(numeroIngresado>numeroMax)
		{
			numeroMax=numeroIngresado;

		}

		if(numeroIngresado<numernoMin)
		{
			numernoMin=numeroIngresado;

		}
		

		respuesta=prompt("ingrese no para salir");
	}

	console.log("elmaximo es:"+numeroMax)
	console.log("elminimo es:"+numernoMin)


}//FIN DE LA FUNCIÓN