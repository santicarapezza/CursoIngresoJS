function mostrar()
{
//tomo la edad  
	var edadIngresada;
	
	parseInt(edadIngresada);
	
	edadIngresada=document.getElementById('edad').value;

	if (edadIngresada<13)	
	 {
	 	alert("Es menor")
	 }
	else	
	{
		if (edadIngresada>18)
		 {
		 	alert("Es mayor")
		 }	else
		 {
		 	alert("es adolescente")
		 }
	}

}//FIN DE LA FUNCIÓN