/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y
100 (validar), la temperatura de almacenamiento (entre -30 y 30) hasta que el usuario quiera e informar
al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado.
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos. 
f) El peso máximo y el mínimo.*/
function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contadordetemperaturaPar;
	var maxpeso
	var maxmarca
	var flagpesomaximo
	var respuesta = true;
	var contadordetemperaturacero
	var contadorde
	


	contadordetemperaturaPar=0;
	contadordetemperaturacero=0;


	while(respuesta == true)
	{
		marca=prompt("Ingrese marca");
		
		peso=prompt("Ingrese peso");
		while(peso<1 || peso>100)
		{ 
			peso = prompt("ingrese nuevamente el peso entre 1 y 100");
		}
		

		temperatura=prompt("Ingrese temperatura");
		while(temperatura<-30 || temperatura>30)
		{
			temperatura = prompt("ingrese nuevamente la temperatura entre -30 y 30");
		}
		
		/*cant de temp pares*/
		if(temperatura%2==0)
		{
				contadordetemperaturaPar++;
		}
		if(flagpesomaximo==false || peso>maxpeso)
		{
			maxmarca =marca;
			maxpeso =peso;
			flagpesomaximo = true;
		}
		
		if(temperatura<0)
		{
			contadordetemperaturacero++;
		}
	
		

	}	

	respuesta=confirm("Desea ingresar otro producto");


	document.write(contadordetemperaturaPar)
	document.write(maxmarca)
	document.write()
}