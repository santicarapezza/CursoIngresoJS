function mostrar()
{
//tomo la edad  
	var edadIngresada;
	var EstadoCivil;

	edadIngresada=document.getElementById('edad').value;
	EstadoCivil=document.getElementById("estadoCivil").value;

	if(edadIngresada<18&&EstadoCivil!="Soltero")
	{
		alert("es muy pequeño para no estar soltero");
	}
	


}//FIN DE LA FUNCIÓN