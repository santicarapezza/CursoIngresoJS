function mostrar()
{
//tomo la edad  
	var edadingresada;

	edadingresada=document.getElementById('edad').value;

	if(edadingresada<=17)
	{
		alert("menor de edad");
	}
	else
	{
		if(edadingresada>=18)
		{
			alert("mayor de edad");
		}
	}


}//FIN DE LA FUNCIÓN