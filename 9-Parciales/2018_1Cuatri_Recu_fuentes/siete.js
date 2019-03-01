function mostrar()
{

	var kilometros;
	var tcombustible;
	var contadorkilometros;
	var contadortcombustible;
	var vehiculos;
	var sumakilometros;
	var promedioveltotal;
	var velmin;

	contadorkilometros=0;
	contadortcombustible=0;
	vehiculos=0;
	sumakilometros=0;
	velmin=0;

	while(vehiculos<5)
	{
		kilometros = prompt("ingrese los kilometros hechos Entre 0 y 250");
		kilometros =parseInt(kilometros);
		
		while(kilometros<0 || kilometros>250)
		{
			kilometros = prompt("ingrese nuevamente los kilometros hechos Entre 0 y 250");
			
			++contadorkilometros;
			
			if(contadorkilometros==2)
			{
				break;
			}
		}



		tcombustible = prompt("ingrese el tipo de combustible por s ó l.");
		


		while(tcombustible!="s" && tcombustible!="l")
		{
			tcombustible = prompt("ingrese nuevamente s ó l .");

			++contadortcombustible;
			
			if(contadortcombustible==2)
			{
				break;
			}
	 	}
	 
	 	sumakilometros=sumakilometros+kilometros;


		if(vehiculos==0)
		{
			velmin=kilometros;

		}

		if(kilometros<velmin)
		{
			velmin=kilometros;

		}
	 	





	 	vehiculos++;
	}

	promedioveltotal=sumakilometros/vehiculos;



	console.log("la suma todal de km es: "+sumakilometros);
	console.log("el promedio es: "+promedioveltotal);
	console.log("la velocidad min es: "+velmin);



}




