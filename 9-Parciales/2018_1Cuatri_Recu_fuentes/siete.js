function mostrar()
{

	var kilometros;
	var tipocombustible;
	var contadorkilometros;
	var contadortipocombustible;
	var vehiculos;
	var sumakilometros;
	var promedioveltotal;
	var velocidadmin;	
	var velocidadmax;
	var velocidadmaxsolida;

	contadorkilometros=0;
	contadortipocombustible=0;
	vehiculos=0;
	sumakilometros=0;
	velocidadmin=0;

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



		tipocombustible = prompt("ingrese el tipo de combustible por s ó l.");
		


		while(tipocombustible!="s" && tipocombustible!="l")
		{
			tipocombustible = prompt("ingrese nuevamente s ó l .");

			++contadortipocombustible;
			
			if(contadortipocombustible==2)
			{
				break;
			}
	 	}
	 
	 	sumakilometros=sumakilometros+kilometros;


		if(vehiculos==0)
		{
			velocidadmin=kilometros;
			velocidadmax=kilometros;
		}

		if(kilometros<velocidadmin)
		{
			velocidadmin=kilometros;

		}
	 	
		if(tipocombustible=="l" && kilometros>100)
		{
			contadortipocombustible++;
		}

		if(tipocombustible=="s" && kilometros>velocidadmax)
		{
			velocidadmaxsolida++;
		}



	 	vehiculos++;
	}

	promedioveltotal=sumakilometros/vehiculos;



	console.log("la suma todal de km es: "+sumakilometros);
	console.log("el promedio es: "+promedioveltotal);
	console.log("la velocidad min es: "+velocidadmin);
	console.log("los vehiculos que usan liquidos son: "+contadortipocombustible);
	console.log("la velocidad mas alta con combustible solido es: "+velocidadmaxsolida);

}




