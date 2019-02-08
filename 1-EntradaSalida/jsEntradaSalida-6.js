/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerrenglon;
	var segundorenglon;
	var suma;

	primerrenglon= numeroUno.value;
	segundorenglon= numeroDos.value;


	primerrenglon=parseInt(primerrenglon);
	segundorenglon=parseInt(segundorenglon);

	suma=(primerrenglon+segundorenglon);

	alert("la suma es:" +suma);







}