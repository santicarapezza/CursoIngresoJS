function mostrar()
{

	var edadIngresada;

	edadIngresada=document.getElementById('edad').value;
	
	if (edadIngresada <=17)
	 {
		alert("niña bonita");
	}
	else
	{
		if(edadIngresada >=18)
		{
			alert("mayor de edad");
		}
	}
	
}