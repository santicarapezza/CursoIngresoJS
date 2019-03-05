function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var EstadoCivil;

	edadIngresada=document.getElementById('edad').value;
	EstadoCivil=document.getElementById('estadoCivil').value;

	if(edadIngresada>=18&&EstadoCivil=="Soltero")
	{
		alert("es soltero y no es menor");
	}

	


}//FIN DE LA FUNCIÓN